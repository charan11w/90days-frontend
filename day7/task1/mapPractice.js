const original = [1, 2, 3, 4, 5]
//map is a transformation function that transforms the elements in the 
// array and returns a new array
const doubled = original.map((ele) => ele * 2);
console.log(original)
console.log(doubled)

const movies = [{
  name: 'avatar',
  price: 100
}]
const formattedMovies = movies.map(element => {
  return {
    name: element.name,
    formattedMovies: `$${element.price}`
  };
});
console.log(movies)
console.log(formattedMovies)

//array of movies
const moviesNew = [{
  name: 'avatar',
  price: 200,
  rating: {
    stars: 5,
    people: 20
  }
},
{
  name: 'mufasa',
  price: 100,
  rating: {
    stars: 3,
    people: 100
  }
},
{
  name: 'lion king',
  price: 120,
  rating: {
    stars: 5,
    people: 160
  }
}
]
console.log(moviesNew)
//creating premiumprice
const moviesNew1 = moviesNew.map(item => {
  return {
    name: item.name,
    premiumPrice: `$${item.price + 100}`,
    rating: {
      stars: item.rating.stars,
      people: item.rating.people
    }
  }
})
console.log(moviesNew1)

//creting movie recomendation
const movieRecomend = moviesNew1.map(items => {
  return {
    name: items.name,
    price: items.premiumPrice,
    recommendation: items.rating.stars > 3 ? 'Recommended' : 'Average'
  }
})
console.log(movieRecomend)