import { PillButton } from '../components/PillButton'

export function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-chalk-white px-6 py-24 text-center">
      <span className="text-xs leading-xs font-medium uppercase tracking-wider text-fog-gray">404</span>
      <h1 className="mt-4 text-5xl leading-5xl font-medium text-ink-teal">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-lg leading-lg text-slate-veil">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <div className="mt-8">
        <PillButton to="/" variant="primary">
          Back to home
        </PillButton>
      </div>
    </section>
  )
}
