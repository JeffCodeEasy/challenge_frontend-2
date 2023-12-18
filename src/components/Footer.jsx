import facebook from "../assets/icon-facebook.svg"
import youtube from "../assets/icon-youtube.svg"
import twitter from "../assets/icon-twitter.svg"
import pinterest from "../assets/icon-pinterest.svg"
import instagram from "../assets/icon-instagram.svg"
import logo from "../assets/logo-white.svg"

export const Footer = () => {
  return (
    <footer className="bg-Very-Dark-Blue py-24">
        <section className="wrapper grid gap-12 justify-items-center footer-area md:footer-area-md md:grid-cols-3 md:justify-items-stretch">

            <form className="flex gap-4 w-full min-w-[100px] [grid-area:form]">
                <input type="email" placeholder="Updates in your inbox…" className="min-w-[50px] flex-1 rounded-full px-4"/>

                <input type="submit" value="GO" className="py-3 px-8 bg-Bright-Red rounded-full text-white"/>
            </form>

            <nav className="grid 
            grid-cols-[max-content_max-content] gap-y-4 justify-between text-white w-4/5 [grid-area:navigation] md:w-full">
                <a href="#">Home</a>
                <a href="#">Pricing</a>
                <a href="#">Products</a>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Community</a>
                <a href="#">Privacy Policy</a>
            </nav>

            <div className="flex flex-wrap gap-4 justify-between w-full [grid-area:social-media]">

                <a href="#">
                    <img src={facebook} className="w-8"/>
                </a>
                <a href="#">
                    <img src={youtube} className="w-8"/>
                </a>
                <a href="#">
                    <img src={twitter} className="w-8"/>
                </a>
                <a href="#">
                    <img src={pinterest} className="w-8"/>
                </a>
                <a href="#">
                    <img src={instagram}  className="w-8"/>
                </a>

            </div>

            <a href="#" className="[grid-area:logo]">
                <img src={logo}/>
            </a>

            <p className="text-Dark-Grayish-Blue text-center [grid-area:copy] md:text-right">Copyright 2020. All Rights Reserved</p>
        </section>
    </footer>
  )
}
