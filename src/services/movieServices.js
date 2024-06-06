const key='b10e0a04f1244ebb394bac090a095598'
console.log(key);

const baseUrl="https://api.themoviedb.org/3"
const endpoints={
    popular: `${baseUrl}/movie/popular?api_key=${key}`,
    topRated:`${baseUrl}/movie/top_rated?api_key=${key}`,
    trending:`${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
    comedy: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1& include_adult=false`,
    upcoming:`${baseUrl}/movie/upcoming?api_key=${key}`
    
}

export default endpoints;