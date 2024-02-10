const KEY = import.meta.env.VITE_KEY;
const API_URL = "https://api.nytimes.com/svc";
const POPULAR_ARTICLE_EMAIL = "mostpopular/v2/emailed";
const MOST_SHARED_ARTICLES = "mostpopular/v2/shared";
const BEST_SELLER_BOOKS_LIST = "books/v3/lists";

// https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=API-KEY
export async function fetch_most_popular_article_sent_in_email() {
  try {
    const res = await fetch(
      `${API_URL}/${POPULAR_ARTICLE_EMAIL}/7.json?api-key=${import.meta.env.VITE_KEY}`
    );
    if (!res.ok)
      throw new Error(`This is an HTTP error: The status is ${res.status}`);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error.message);
  }
}

// https://api.nytimes.com/svc/mostpopular/v2/shared/{period}.json
export async function fetch_most_shared_article() {
  try {
    const res = await fetch(
      `${API_URL}/${MOST_SHARED_ARTICLES}/7.json?api-key=${import.meta.env.VITE_KEY}`
    );
    if (!res.ok) throw new Error(`This is an HTTP error: ${res.status}`);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error.message);
  }
}

// https://api.nytimes.com/svc/books/v3/lists/{date}/{list}.json
export async function fetch_best_sellers_book_list(
  date = null,
  list = "hardcover-fiction",
  contorller,
  setErrorMsg
) {
  if (date === null) date = new Date().toJSON().slice(0, 10);
  const res = await fetch(
    `${API_URL}/${BEST_SELLER_BOOKS_LIST}/${date}/${list}.json?api-key=${import.meta.env.VITE_KEY}`,
    { signal: contorller.signal }
  );
  console.log(res);
  if (res?.status === 404) {
    setErrorMsg(`${res.statusText} reults for ${date}`);
    return [];
  }
  if (!res.ok) {
    setErrorMsg(
      `${res.statusText}. Please wait some time and refresh the page.`
    );
    throw new Error(`This is an HTTP error: ${res.status}`);
  }
  const data = await res.json();
  return data.results;
}
