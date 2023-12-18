import logo from "../assets/logo.svg";
import intro from "../assets/illustration-intro.svg"
import tablet from "../assets/bg-tablet-pattern.svg"

export const Header = () => {
  return (
    <>
        <header >
            <nav className="wrapper h-20 items-center justify-between  flex">
        
                <a href="#" className="w-1/3 max-w-[140px]">
                    <img src={logo} alt="Logo" className="w-full" />
                </a>
                
                <input type="checkbox" id="menu" className="peer hidden"/>
                <label htmlFor="menu" className="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden "></label>
                
                <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform top-3 md:static md:bg-none md:translate-x-0 ">
                    <ul className="absolute inset-x-0 top-24 p-12 bg-white w-[90%] rounded-md h-max mx-auto text-center grid gap-6 font-bold text-Dark-Blue shadow-2xl md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static">
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Product</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Community</a>
                        </li>
                    </ul>
                </div>

            <button className="button shadow-sm shadow-bright-red/30 hidden lg:block py-3">Get Started</button>
            </nav>

            <section className="wrapper grid gap-8 items-center justify-items-center pb-12 md:grid-cols-2 md:py-24">
                <img src={intro} alt="" className="w-full max-w-lg md:order-1" />

                <article className="text-center space-y-6 md:text-left md:space-y-8">
                    <h1 className="text-4xl font-bold text-Very-Dark-Blue md:text-5xl">
                        Bring everyone together to build better products.
                    </h1>

                    <p className="text-Dark-Grayish-Blue">
                    Manage makes it simple for software teams to plan day-to-day
                    tasks while keeping the larger team goals in view.
                    </p>

                    <button className="button mx-auto shadow-xl shadow-Bright-Red/30 md:mx-0">Get Started</button>
                </article>

            </section>
        </header>

        <figure className="absolute inset-0 overflow-hidden pointer-events-none">
            <img src={tablet} className="absolute w-full -z-10 -top-24 -right-1/4 max-w-2xl"/>
        </figure>
    </>
  )
}
