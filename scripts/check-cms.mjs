// Fails if public/admin/config.yml and src/content/*.json disagree, so the panel can't write a field the site doesn't read (or hide one it does).
import { readFileSync, readdirSync } from 'node:fs'
import { parse } from 'yaml'

const config = parse(readFileSync('public/admin/config.yml', 'utf8'))
const errors = []
const err = (where, msg) => errors.push(`${where}: ${msg}`)
const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v)

function checkFields(fields, value, where) {
  if (!isObj(value)) return err(where, 'expected an object')
  const want = fields.map((f) => f.name)
  for (const k of Object.keys(value)) if (!want.includes(k)) err(`${where}.${k}`, 'in JSON but not editable in config.yml')
  for (const f of fields) {
    if (!(f.name in value)) err(`${where}.${f.name}`, 'in config.yml but missing from JSON')
    else checkField(f, value[f.name], `${where}.${f.name}`)
  }
}

function checkField(f, v, where) {
  switch (f.widget) {
    case 'string':
    case 'text':
      if (typeof v !== 'string') err(where, 'expected a string')
      break
    case 'select':
      if (!f.options.some((o) => (o.value ?? o) === v)) err(where, `"${v}" is not one of the select options`)
      break
    case 'object':
      checkFields(f.fields, v, where)
      break
    case 'list':
      if (!Array.isArray(v)) return err(where, 'expected an array')
      if (f.min != null && v.length < f.min) err(where, `needs at least ${f.min} items`)
      if (f.max != null && v.length > f.max) err(where, `allows at most ${f.max} items`)
      v.forEach((item, i) => (f.fields ? checkFields(f.fields, item, `${where}[${i}]`) : checkField(f.field, item, `${where}[${i}]`)))
      break
    default:
      err(where, `unsupported widget "${f.widget}"`)
  }
}

const covered = new Set()
for (const col of config.collections) {
  for (const file of col.files) {
    covered.add(file.file)
    checkFields(file.fields, JSON.parse(readFileSync(file.file, 'utf8')), file.name)
  }
}
for (const f of readdirSync('src/content')) if (!covered.has(`src/content/${f}`)) err(f, 'is not editable: add it to config.yml')

if (errors.length) {
  console.error(`check:cms found ${errors.length} problem(s):\n- ${errors.join('\n- ')}`)
  process.exit(1)
}
console.log('check:cms ok')
