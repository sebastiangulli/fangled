import { STATS } from '../data/site'

export function StatRow() {
  return (
    <section className="bg-pale-mist px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-5">
        <div className="md:col-span-1">
          <h2 className="text-3xl leading-3xl font-medium text-ink-teal">By the numbers</h2>
        </div>
        <div className="grid gap-8 md:col-span-4 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl leading-3xl font-medium text-ink-teal">{stat.value}</div>
              <p className="mt-2 text-sm leading-sm text-fog-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
