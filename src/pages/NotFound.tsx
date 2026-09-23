import { PillButton } from '../components/PillButton'
import { BrandMark } from '../components/Nav'

export function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <BrandMark className="h-14 w-auto" />
      <span className="tabular mt-6 font-display text-[clamp(3rem,8vw,6rem)] leading-none text-taupe">404</span>
      <h1 className="mt-2 text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.08] text-ink">
        This sheet isn’t in the set
      </h1>
      <p className="mt-4 max-w-md text-body leading-body text-slate">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <div className="mt-8">
        <PillButton to="/" variant="primary">
          Back to home
        </PillButton>
      </div>
    </section>
  )
}
