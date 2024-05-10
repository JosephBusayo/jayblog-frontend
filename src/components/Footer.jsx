import { Footer, FooterDivider } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsWhatsapp } from 'react-icons/bs'


export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto flex pb-2">

        <div className="grid w-full justify-between sm:flex md:grid-col-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-centered whitespace-nowrap text-2xl sm:text-3xl font-semibold dark:text-white font-mono "
            >
              JayBlog
            </Link>
          </div>

        </div>

        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Jay Jay"
            year={new Date().getUTCFullYear()}
          />

        </div>
      </div>
    </Footer>
  );
}
