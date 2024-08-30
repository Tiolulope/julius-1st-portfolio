import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Software Sultan
        </motion.span>
        <div className="social">
          <a href="https://x.com/julius_ilv">
            <img src="/xlog.jpg" alt="twitter" />
          </a>
          <a href="https://hashnode.com/@softwareSultan">
            <img src="/hashnode1.png" alt="my_blog" />
          </a>
          <a href="https://github.com/Tiolulope">
            <img src="/icone-github-orange.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/julius-adedeji-b72855158/">
            <img src="/Linkedin.webp" alt="linkedin_profile" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
