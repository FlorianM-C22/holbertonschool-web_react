export default function BodySection({ title, children }) {
  return (
    <section className="w-full px-6 py-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed text-gray-700">{children}</div>
    </section>
  )
}
