const KEY = import.meta.env.VITE_KEY;
// const POPULAR_ARTICLE_EMAIL = "mostpopular/v2/emailed/{period}.json";
const API_URL = "https://api.nytimes.com/svc";
const POPULAR_ARTICLE_EMAIL = "mostpopular/v2/emailed";
const MOST_SHARED_ARTICLES = "mostpopular/v2/shared";
// https://api.nytimes.com/svc/mostpopular/v2/shared/{period}.json
// https://api.nytimes.com/svc/books/v3/lists/{date}/{list}.json
// https://api.nytimes.com/svc

// https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=yourkey

export async function fetch_most_popular_article_sent_in_email() {
  try {
    const res = await fetch(
      `${API_URL}/${POPULAR_ARTICLE_EMAIL}/7.json?api-key=${import.meta.env.VITE_KEY}`
    );
    if (!res.ok)
      throw new Error(`This is an HTTP error: The status is ${res.status}`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetch_most_shared_article(setSharedArticles) {
  try {
    const res = await fetch(
      `${API_URL}/${MOST_SHARED_ARTICLES}/7.json?api-key=${import.meta.env.VITE_KEY}`
    );
    if (!res.ok) throw new Error(`This is an HTTP error: ${res.status}`);
    const data = await res.json();
    // return data;
    setSharedArticles(data.results);
  } catch (error) {
    console.log(error.message);
  }
}
