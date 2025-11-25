import BodySection from './BodySection'

export default function BodySectionWithMarginBottom({ title, children }) {
  return (
    <div className="w-full border-b border-gray-200 pb-10 mb-10 last:mb-0 last:border-none last:pb-0">
      <BodySection title={title}>{children}</BodySection>
    </div>
  )
}
