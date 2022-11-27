import Header from "../../components/Header";
import Meta from "../../components/Meta";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import pic from "../../public/assets/Pict-2.png";

export default function Reference() {
    return (
        <div>
            <Meta title="Nutrition: Reference - Next JS" />
            <Header />
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
                    <Image class="lg:w-1/12 md:w-1/10 w-1/10 mb-8 object-cover object-center rounded" alt="detail" src={pic} width="100" height="100" />
                    <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
                            Next JS
                        </h1>
                        <p class="mb-8 leading-relaxed">
                            Next.js is a flexible React framework that gives you building blocks to create fast web applications.
                        </p>
                        <div class="flex justify-center">
                            <Link href="https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs" target="_blank" rel="noopener noreferrer" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}