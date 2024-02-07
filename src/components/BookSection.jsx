function BookSection() {
  return (
    <>
      <div className="pt-20 flex justify-center md:mt-[40px] gap-5"></div>
      <section className="pb-[80px] pt-5 md:mt-[100px]">
        <div className="container lg:px-20">
          <div className="grid items-center gap-5 ">
            <div>
              <h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#191D26] lg:text-[73px]">
                Books
              </h1>
              <p className="text-lg my-2 opacity-80">
                Get Best Sellers list by date
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-20" id="tasks">
        <div className="container">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#d8d9da] px-6 py-8 md:px-9 md:py-16">
            <div className="overflow-auto">
              <table className="table-fixed overflow-auto xl:w-full">
                <thead>
                  <tr>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                      {" "}
                      Serial{" "}
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                      {" "}
                      Image{" "}
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                      {" "}
                      Title{" "}
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                      {" "}
                      Author{" "}
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                      {" "}
                      Amazon URL{" "}
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                      {" "}
                      Price{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                    <td className="text-center">1</td>
                    <td>
                      <img
                        className="w-8 h-8"
                        width="32"
                        height="32"
                        src="https://images.pexels.com/photos/20034321/pexels-photo-20034321/free-photo-of-a-hot-air-balloon-flying-through-the-cloudy-sky.jpeg"
                        alt="Combined Print and E-Book Fiction"
                      />
                    </td>
                    <td>
                      <div>Combined Print and E-Book Fiction</div>
                    </td>
                    <td className="flex justify-center gap-1.5 flex-wrap">
                      Andy Weir
                    </td>
                    <td className="text-center text-blue-500">
                      <a
                        href="http://www.amazon.com/The-Martian-Novel-Andy-Weir-ebook/dp/B00EMXBDMA?tag=thenewyorktim-20"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Amazon Url
                      </a>
                    </td>
                    <td>
                      <div className="flex items-center justify-center space-x-3">
                        <p className="text-blue-500">$100</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                    <td className="text-center">1</td>
                    <td>
                      <img
                        className="w-8 h-8"
                        width="32"
                        height="32"
                        src="https://images.pexels.com/photos/20034321/pexels-photo-20034321/free-photo-of-a-hot-air-balloon-flying-through-the-cloudy-sky.jpeg"
                        alt="Combined Print and E-Book Fiction"
                      />
                    </td>
                    <td>
                      <div>Combined Print and E-Book Fiction</div>
                    </td>
                    <td className="flex justify-center gap-1.5 flex-wrap">
                      Andy Weir
                    </td>
                    <td className="text-center text-blue-500">
                      <a
                        href="http://www.amazon.com/The-Martian-Novel-Andy-Weir-ebook/dp/B00EMXBDMA?tag=thenewyorktim-20"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Amazon Url
                      </a>
                    </td>
                    <td>
                      <div className="flex items-center justify-center space-x-3">
                        <p className="text-blue-500">$100</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                    <td className="text-center">1</td>
                    <td>
                      <img
                        className="w-8 h-8"
                        width="32"
                        height="32"
                        src="https://images.pexels.com/photos/20034321/pexels-photo-20034321/free-photo-of-a-hot-air-balloon-flying-through-the-cloudy-sky.jpeg"
                        alt="Combined Print and E-Book Fiction"
                      />
                    </td>
                    <td>
                      <div>Combined Print and E-Book Fiction</div>
                    </td>
                    <td className="flex justify-center gap-1.5 flex-wrap">
                      Andy Weir
                    </td>
                    <td className="text-center text-blue-500">
                      <a
                        href="http://www.amazon.com/The-Martian-Novel-Andy-Weir-ebook/dp/B00EMXBDMA?tag=thenewyorktim-20"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Amazon Url
                      </a>
                    </td>
                    <td>
                      <div className="flex items-center justify-center space-x-3">
                        <p className="text-blue-500">$100</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookSection;
