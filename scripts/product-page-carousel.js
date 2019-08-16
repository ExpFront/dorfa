// perPage accepts two kind of data as a value

// Number:
// fixed amount of slider for all resolutions

// example:
// const mySiema = new Siema({
//   perPage: 2,
// });


// Object
// more complex configuration allows you to specify
// number of slides dependable of browsers viewport
// example below show single slide on small viewpoer
// 2 slider on scrrens wider than 768px
// 3 slider on scrrens wider than 1024px

// example:
// const mySiema = new Siema({
//   perPage: {
//     768: 2,
//     1024: 3,
//   },
// });
const mySiema = new Siema({
  perPage: 2,
});
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());
