import Header from '../ui/organisms/Header/Header'
import Footer from '../ui/organisms/Footer/Footer'
import Image from 'next/image'

function Layout({ children }) {
      return (
            <>
                  {/* header */}
                  <Header />
                  {/* hero */}
                  <div>
                        <Image className="w-full" src="/images/heroPic.png" width={2000} height={2000} />
                  </div>
                  {/* main */}
                  <main className='px-[3rem] md:px-[10rem] mx-auto'>{children}</main>
                  {/* footer */}
                  <Footer />
            </>
      )
}

export default Layout