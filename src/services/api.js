import axios from "axios";

const key = "17751267-16ded02a741af1cdfc94a2144";
const url = "https://pixabay.com/api/";

const apiSearch = (searchQuery, page) => {
  return axios
    .get(
      `${url}?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((res) => res.data);
};

export default { apiSearch };
