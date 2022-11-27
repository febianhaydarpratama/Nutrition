import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import profile from "../public/assets/profile-1.png";

export default function About() {
  return (
    <div>
      <Meta title="Nutrition: About" />

      <Header />

      <section className="text-gray-600 body-font">
        <div className="container px-20 py-40 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image
                    src={profile}
                    alt="profile"
                    className="rounded-full"
                    width="1000"
                    height="1000"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Febian Haydar Pratama
                  </h2>
                  <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    An undergraduate student of Computer Engineering, Diponegoro
                    University.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-justify">
                <p className="leading-relaxed text-lg mb-4">
                  Nutrition is an application that contains eating healthy and balanced food
                  with one way of dieting using the katogenic method which contains a data 
                  collection of more than 450 Ketogenic diet recipes in morethan 10 categories 
                  from Breakfast to Dinner.This application was developed using
                  next.js with the best practices that I have learned. Apart
                  from that, this application is also deployed using Vercel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}