import axios from 'axios';

let page = 1;
export function resetPage() {
  page = 1;
}

export async function fetchImage(searchQuery) {
  const searchParams = new URLSearchParams({
    key: '28529153-0050f126950b91c5eedae5b33',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page,
  });
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?${searchParams}`
    );
    page += 1;
    // console.log(response);
    return response;
  } catch {
    console.log(error);
  }
  return response;
}
