import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Label() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!router.query.data) return;
    const _data = JSON.parse(router.query.data).data;
    setTitle(`: ${_data.name}`);
    setData(_data);
  }, []);

  return (
    <div>
      <Meta title={`Nutrition${title}`} />

      <Header />

      <section className="text-gray-600 body-font ">
        <div className="container px-10 py-40 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={data ? data.image : ""}
              width="400"
              height="400"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {data ? data.category.category : ""}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {data ? data.recipe : ""}
              </h1>
              <p className="leading-relaxed">
                {data ? data.directions_step_1 : ""}
              </p>
              <p className="leading-relaxed">
                {data ? data.directions_step_2 : ""}
              </p>
              <p className="leading-relaxed">
                {data ? data.directions_step_3 : ""}
              </p>
              <p className="leading-relaxed">
                {data ? data.directions_step_4 : ""}
              </p>
              <p className="leading-relaxed">
                {data ? data.directions_step_5 : ""}
              </p>
              <p className="leading-relaxed">
                {data ? data.directions_step_6 : ""}
              </p>
              <p className="leading-relaxed">
                {data ? data.directions_step_7 : ""}
              </p>
              <p className="leading-relaxed">
                {data ? data.directions_step_8 : ""}
              </p>
              <p className="leading-relaxed">
                {data ? data.directions_step_9 : ""}
              </p>
              <p className="leading-relaxed">
                {data ? data.directions_step_10 : ""}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}