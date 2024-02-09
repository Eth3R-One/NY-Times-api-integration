import { useEffect, useState } from "react";
import Loading from "./Loading";
import { fetch_best_sellers_book_list } from "../utils/fetchData";

function BookSection() {
  const [bestSellerBooks, setBestSellerBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    async function best_seller_books() {
      try {
        setIsLoading(true);
        const data = await fetch_best_sellers_book_list();
        setBestSellerBooks(data);
        return data;
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (!ignore) best_seller_books();

    return () => {
      ignore = true;
    };
  }, []);

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
                Get Best Sellers book list by date.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-auto" id="tasks">
        <div className="container">
          {isLoading ? (
            <Loading />
          ) : bestSellerBooks?.length < 1 ? (
            <div>
              <p className="flex justify-center text-xl text-red-700">
                Error fetching data
              </p>
            </div>
          ) : (
            <div className="rounded-xl border border-[rgba(206,206,206,0.12)]  px-6 py-4 md:px-9 md:py-10">
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left">Image</th>
                      <th className="px-4 py-2 text-left">Title</th>
                      <th className="px-4 py-2 text-left">Author</th>
                      <th className="px-4 py-2 text-left">Amazon</th>
                      <th className="px-4 py-2 text-left">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bestSellerBooks.books?.map((book) => {
                      return (
                        <tr key={book.primary_isbn10} className="border-t-2">
                          <td className="px-4 py-2">
                            <img
                              src={book.book_image}
                              alt={book.title}
                              className="w-16 h-16 rounded-full"
                            />
                          </td>
                          <td className="px-4 py-2">{book.title}</td>
                          <td className="px-4 py-2">{book.author}</td>
                          <td className="px-4 py-2">
                            <a
                              href={book.amazon_product_url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-block text-blue-500 hover:text-blue-700"
                            >
                              Buy on Amazon
                            </a>
                          </td>
                          <td className="px-4 py-2">$ {book.price} </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default BookSection;
