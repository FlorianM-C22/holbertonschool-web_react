import { getCurrentYear, getFooterCopy } from '../utils/utils'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full border-t-4 border-[color:var(--main-color)] bg-white py-4 text-center">
      <p className="italic text-sm font-medium text-gray-700 sm:text-base">
        Copyright {getCurrentYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  )
}
