async function movieDetails(movieId) {
    const key = '29ab84dcc4d690c01746cf216b8a2af7';
    const url = `https://api.themoviedb.org/3/movie/${movieId}`;
    const filter = `?api_key=${key}&language=en-US`;
  
    const response = await fetch(`${url}${filter}`);
    const data = await response.json();
  
    return data;
  }
  
  export default movieDetails;