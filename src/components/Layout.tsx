import Link from 'next/link'
import siteConfig from 'site-config'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

const Header = () => (
  <header className="bg-blue-600 rounded-bl-3xl">
    <div className="container mx-auto flex flex-wrap px-5 pt-8 pb-12 flex-col md:flex-row items-center">
      <Link href="/">
        <a className="flex font-medium items-center mb-4 md:mb-0">
          <span className="text-xl text-white">{siteConfig.title}</span>
        </a>
      </Link>
    </div>
  </header>
)

export default Layout
