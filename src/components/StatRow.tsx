import { STATS } from '../data/site'

export function StatRow() {
  return (
    <section className="border-y border-hairline-gray bg-pale-mist">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-px bg-hairline-gray lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-pale-mist px-6 py-8 md:px-8 md:py-10">
            <div className="tabular font-display text-stat leading-stat text-ink-teal">{stat.value}</div>
            <p className="mt-2 max-w-[24ch] text-body-sm leading-body-sm text-fog-gray">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
