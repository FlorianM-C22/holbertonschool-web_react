import logo from '../assets/holberton-logo.jpg'

export default function Header() {
  return (
    <header className="flex flex-wrap items-center gap-6 py-6">
      <img src={logo} className="h-28 w-auto shrink-0" alt="Holberton School logo" />
      <h1 className="text-4xl font-extrabold text-[color:var(--main-color)]">School Dashboard</h1>
    </header>
  )
}
