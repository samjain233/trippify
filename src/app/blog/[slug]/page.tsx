import React from "react";
import { getPostByName } from "../../../../lib/getPostData";
import Navbar from "@/app/components/navbar/Navbar";
import InfoCards from "@/app/components/infoCards/InfoCards";
type parmasType = {
  params: {
    slug: string;
  };
};

const wrapper: string =
  "sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto";
const slug = async ({ params }: parmasType) => {
  const fileName = "temp3.md";
  const {
    meta: { title },
    content,
  } = await getPostByName(fileName);
  return (
    <>
      <Navbar />
      <div className={`flex flex-col md:flex-row mb-10 ${wrapper}`}>
        {/* content  */}
        <div className="px-4 flex-auto w-full md:w-2/3">
          <h1>{params.slug}</h1>
          <h2>{title}</h2>
          <div className="main">
            <article className="info_body">{content}</article>
          </div>
          <hr className="w-full h-1 bg-[#184E77] mt-8" />
        </div>
        {/* side nav  */}
        <div className="flex-auto w-1/3 hidden md:block">
          <aside>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            commodi beatae sint? Et debitis veritatis voluptates ut, sint, est,
            eos modi expedita fugiat atque tenetur amet earum voluptatum
            doloremque eaque temporibus. Magni minus impedit delectus dolorum
            sint explicabo libero repellat vel officiis natus odit incidunt ad
            nemo similique voluptatum quia odio quas modi, ipsam et esse eum
            dicta sit. Quidem, eaque? Voluptatem recusandae illo optio est,
            saepe quam iusto aliquam cum voluptatibus at debitis pariatur,
            necessitatibus eligendi, fugiat assumenda reiciendis! Inventore
            possimus itaque illum sapiente hic tempora error eum sint quas ut
            voluptas unde dolorem, maxime aut doloremque officia fuga? Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Eaque incidunt
            eum nam adipisci dignissimos placeat sint cupiditate laborum amet
            nisi quidem voluptates quis, alias repudiandae! Similique quas
            ducimus excepturi quidem eos voluptates, non debitis fugiat porro
            dolore dignissimos eveniet laboriosam quia expedita animi minus
            asperiores id consequatur ex accusantium repellendus distinctio
            perferendis cumque! Quidem itaque sunt sequi magnam ratione! Quos
            adipisci optio illo quod eos, nesciunt quisquam molestias, excepturi
            omnis corporis aut nostrum? Quae dignissimos vero a eligendi officia
            veniam aperiam distinctio ratione velit, labore, minima placeat
            ullam laboriosam aut ex ab mollitia sint fugit nemo assumenda dicta!
            Sequi, tempora!
          </aside>
        </div>
      </div>
      <div className={`${wrapper} px-4 md:px-0`}>
        <InfoCards />
      </div>
    </>
  );
};

export default slug;
