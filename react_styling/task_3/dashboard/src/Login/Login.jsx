import WithLogging from '../HOC/WithLogging'

function Login() {
  return (
    <section className="w-full border-t-4 border-[color:var(--main-color)] bg-white px-6 py-10">
      <p className="text-xl font-medium text-gray-900">Login to access the full dashboard</p>
      <form className="mt-8 flex flex-wrap items-center gap-4 text-lg text-gray-800">
        <div className="flex items-center gap-2">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            className="rounded border border-gray-400 px-3 py-2 focus:border-[color:var(--main-color)] focus:outline-none focus:ring-1 focus:ring-[color:var(--main-color)]"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type="password"
            name="user_password"
            id="password"
            className="rounded border border-gray-400 px-3 py-2 focus:border-[color:var(--main-color)] focus:outline-none focus:ring-1 focus:ring-[color:var(--main-color)]"
          />
        </div>
        <button type="submit" className="rounded bg-[color:var(--main-color)] px-5 py-2 font-semibold text-white transition-colors hover:opacity-90">
          OK
        </button>
      </form>
    </section>
  )
}

const LoginWithLogging = WithLogging(Login)
export default LoginWithLogging
