async function movieSearch(query, page = 1) {
    const key = '29ab84dcc4d690c01746cf216b8a2af7';
    const url = `https://api.themoviedb.org/3/search/movie`;
    const filter = `?api_key=${key}&query=${query}&language=en-US&page=${page}&include_adult=false`;
  
    const response = await fetch(`${url}${filter}`);
    const data = await response.json();
  
    return data;
  }
  
  export default movieSearch;