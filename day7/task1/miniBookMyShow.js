const moviesCollection = [{
  name: 'Daku Maharaj',
  price: 200,
  seatAvailability: 50,
  rating: 4.5
},
{
  name: 'Mufasa',
  price: 150,
  seatAvailability: 0,
  rating: 5
},
{
  name: 'Intersteller',
  price: 300,
  seatAvailability: 30,
  rating: 3
},
{
  name: 'Sankranthii Vastunnam',
  price: 100,
  seatAvailability: 0,
  rating: 5
}
]
console.log(moviesCollection)

//using map function to show only available movies
const availableMovies=moviesCollection.map(movie => {
  if(movie.seatAvailability>0){
    return movie;
  }
})
console.log(availableMovies)

//Applying weekend surge pricing
const weekendSurge=moviesCollection.map(movieItem => {
  return {
    name: 'Sankranthii Vastunnam',
    surgePrice: `$${movieItem.price + 100}`,
    seatAvailability: 0,
    rating: 5
  }
})

console.log(weekendSurge)