import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import banner from '../assets/images/banner.png';
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import featureImg from "../assets/images/feature-img.png";
import RestaurantList from "../components/Restaurants/RestaurantList";
import faqImg from "../assets/images/faq-img.png";
import FaqList from "../components/Faq/FaqList";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div className="">
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help you to search, find, eat, enjoy and travel to new
                  <font className="text-blue-500"> places.</font>
                </h1>
                <p className="text__para">
                  With our user-friendly platform, discovering hidden culinary
                  gems has never been easier. Search, find, and indulge in
                  unique dining experiences, enjoy local flavors, and travel to
                  exciting destinations, all while supporting local
                  entrepreneurs{" "}
                </p>
                <button className="btn">Request an Appointment</button>
              </div>

              {/* hero counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div className="">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-blueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Registered Restaurants</p>
                </div>
                <div className="">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-greenColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Restaurants location</p>
                </div>
                <div className="">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Client Satisfaction</p>
                </div>
              </div>
            </div>
            {/* hero content */}
            <div className="flex gap-[30px] justify-end">
              <div className="">
                <img src={heroImg01} alt="Image" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="Image" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="Image" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* hero section end */}
      <section className="mb-[60px] lg:mb-[80px]">
        <br />
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best customer service
            </h2>
            <p className="text__para text-center">
              We are dedicated to delivering exceptional customer service,
              ensuring a seamless experience from the moment you start exploring
              to the time you savor your meal. Your satisfaction is our
              priority, and we’re here to make your journey unforgettable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="Icon" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Restaurant
                </h2>
                <p>
                  World-class care for everyone. Our restaurant management
                  system offers unmatched, expert care. From the kitchen to the
                  table.
                </p>
                <Link
                  to="/restaurants"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="Icon" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p>
                  World-class care for everyone. Our system helps you find
                  restaurant locations with ease. From planning your itinerary
                  to your dining destination.
                </p>
                <Link
                  to="/restaurants"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                          mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="Icon" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book an appointment
                </h2>
                <p>
                  World-class care for everyone. Our restaurant reservation
                  system offers unmatched, expert service. From planning your
                  itinerary to finding restaurant locations
                </p>
                <Link
                  to="/restaurants"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                          mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about section */}
      <About />

      {/* services section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Services</h2>
            <p className="text__para text-center">
              We specialize in connecting travelers and food lovers with the
              vibrant culinary scene of Chorro de Quevedo, Bogotá. Our platform
              highlights small and medium-sized restaurants, cafés, and food
              markets, offering cultural food tours, local dining experiences,
              and much more. Explore authentic Colombian cuisine and support
              local businesses through our tailored services.{" "}
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* services section end */}

      {/* feature section */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* feature content */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual assistance <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the itinerary directly.
                </li>
                <li className="text__para">
                  2. Search your place here, and contact their restaurants.
                </li>
                <li className="text__para">
                  3. View our places that are accepting new tourists, use the
                  online scheduling tool to select a time of arrival.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            {/* feature img */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature section end */}

      {/* our great restaurants */}
      <section>
        <div className="container">
          <br />
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great places</h2>
            <p className="text__para text-center">
              Exceptional service for all. Our reservation system makes planning
              your dining experience effortless. From choosing your restaurant
              to securing your table.
            </p>
          </div>

          <RestaurantList />
        </div>
      </section>
      {/* our great restaurants */}

      {/* faq section */}
      <section>
        <div className="container">
          <br />
          <br />
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <br />

              <h2 className="heading">
                Most questions by our beloved tourists
              </h2>
              <br />
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* faq section end */}
      <div className="">
        <img src={banner} alt="banner" />
      </div>
    </>
  );
};

export default Home;
