import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import pic1 from "../public/assets/Pict-1.png";
import pic2 from "../public/assets/Pict-2.png";
import pic3 from "../public/assets/Pict-3.png";


export default function Reference() {
  return (
    <div>
      <Meta title="Nutrition: Reference" />
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container px-20 py-20 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-semibold title-font text-gray-900 mb-4">
              Nutrition Reference
            </h1>
            
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-20 md:w-1/3 w-full flex flex-col text-justify items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-black-100 text-pink-500 mb-5 flex-shrink-0">
                <Image
                  alt="icon"
                  src={pic1}
                  className="rounded-full bg-white"
                />
              </div>
              <div class="flex-grow">
                <Link href="/reference/github">
                  <h2 class="text-gray-900 text-lg text-center title-font font-semibold mb-3">
                    Github
                  </h2>
                </Link>
              </div>
            </div>
            <div class="p-20 md:w-1/3 w-full flex flex-col text-justify items-center">
              <div class="bg-white bg-none w-20 h-20 inline-flex items-center justify-center rounded-full bg-black-100 text-pink-500 mb-5 flex-shrink-0">
                <Image
                  alt="icon"
                  src={pic2}
                  className="rounded-full bg-white"
                />
              </div>
              <div class="flex-grow">
                <Link href="/reference/nextjs">
                  <h2 class="text-gray-900 text-lg text-center title-font font-semibold mb-3">
                    Next JS
                  </h2>
                </Link>
              </div>
            </div>
            <div class="p-20 md:w-1/3 w-full flex flex-col text-justify items-center">
              <div class="bg-white w-20 h-20 inline-flex items-center justify-center rounded-full bg-black-100 text-pink-500 mb-5 flex-shrink-0">
                <Image
                  alt="icon"
                  src={pic3}
                  className="rounded-full bg-white"
                />
              </div>
              <div class="flex-grow">
                <Link href="/reference/vercel">
                  <h2 class="text-gray-900 text-lg text-center title-font font-semibold mb-3">
                    Vercel JS
                  </h2>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}