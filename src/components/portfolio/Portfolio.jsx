import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "music show booking app",
    img: "https://aishatliasu.com/static/12fcd826656fd2d03718b0382d340931/c1b63/fyyur-desktop-view.png",
    description:
      "I developed a full-stack web application aimed at helping artists find event venues for performances, as well as enabling event centers to showcase their venues to potential performers. My primary focus was on the backend development of the project.",
  },
  {
    id: 2,
    title: "food app",
    img: "https://repository-images.githubusercontent.com/513101784/cf085219-342d-49e7-9300-2d826623309d",
    description:
      " I focused on developing the front-end of this web app for a food restuarant. The app aimed to provide a user-friendly experience for discovering new recipes and connecting with local restaurants",
  },
  {
    id: 3,
    title: "e-commerce app",
    img: "https://user-images.githubusercontent.com/100989693/185182133-ca8cd44c-d90b-4cfa-89ed-cdcb1099bc5e.png",
    description:
      "This e-commerce application include modern design and animations, the ability to add and edit products on the go using a Sanity, all advanced cart, and checkout functionalities, and most importantly, the complete integration with Stripe so that you can cover real payments.",
  },
  {
    id: 4,
    title: "hoobank",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXX9ZCNUeeut1Gp0ibvLA_7AlksyIIxgEoHA&s",
    description:
      "I  built a responsive React JS application with an eye-catching hero section, high-quality assets, gradients, business statistics, reusable feature sections with call-to-action buttons, testimonials, and more!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    terget: ref,
    //   offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {/* <button>See Details</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
