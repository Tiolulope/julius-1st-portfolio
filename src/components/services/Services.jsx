import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1, // Corrected typo here
    },
  },
};

const Services = () => (
  <motion.div
    className="services"
    variants={variants}
    initial="initial"
    whileInView="animate"
  >
    <motion.div className="textContainer" variants={variants}>
      <p>
        I specialize in solving business challenges, driving brand growth
        <br />
        and ensuring that your company moves forward with success.
      </p>
      <hr />
    </motion.div>
    <motion.div className="titleContainer" variants={variants}>
      <div className="title">
        <img src="/sultan2.jpg" alt="Unique ideas concept" />
        <h1>
          <motion.b whileHover={{ color: "white" }}>Unique</motion.b> Ideas
        </h1>
      </div>
      <div className="title">
        <h1>
          <motion.b whileHover={{ color: "white" }}>For Your</motion.b> Business
        </h1>
        <button>What I do?</button>
      </div>
    </motion.div>
    <motion.div className="listContainer" variants={variants}>
      <motion.div
        className="box"
        whileHover={{ background: "lightgray", color: "black" }}
      >
        <h2>Front-End Engineering</h2>
        <p>
          I craft responsive, user-friendly interfaces with intuitive layouts
          and seamless performance, ensuring your web applications excel across
          all devices.
        </p>
        <button>see my projects</button>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ background: "lightgray", color: "black" }}
      >
        <h2>Back-End Engineering</h2>
        <p>
          I build scalable back-end systems with a focus on performance,
          security, and efficiency, ensuring seamless data handling and reliable
          server infrastructure.
        </p>
        <button>see my projects</button>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ background: "lightgray", color: "black" }}
      >
        <h2>Mobile-App Development</h2>
        <p>
          I develop scalable mobile apps with a focus on performance, user
          experience, and seamless functionality, ensuring your app runs
          smoothly and meets your business needs.
        </p>
        <button>see my projects</button>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ background: "lightgray", color: "black" }}
      >
        <h2>Technical Writing</h2>
        <p>
          I provide clear, detailed software documentation, including API
          guides, programming tutorials, and user manuals, to support smooth
          development and a better user experience.
        </p>
        <a href="https://hashnode.com/@softwareSultan" className="button-link">
          see my blog
        </a>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default Services;
