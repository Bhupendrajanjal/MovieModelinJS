let cl = console.log;

const showModal = document.getElementById('showModal');
const backDrop = document.getElementById('backDrop');
const ourModal = document.getElementById('ourModal');
const movieForm = document.getElementById('movieForm');
const modalClose = document.querySelectorAll('.modalClose');
const titleControl = document.getElementById('title');
const ratingControl = document.getElementById('rating');
const urlControl = document.getElementById('url');
const movieContainer = document.getElementById('movieContainer');


const movieArray = [
    {
        "title": "Rock KJF ",
        "rating": "10",
        "url" :   "https://www.91-cdn.com/hub/wp-content/uploads/2022/12/Best-South-Indian-movies.jpg" 
     }
];

const templating = (arr) => {
    let res = ''
    arr.forEach(movieObj => {
        res += `
        <div class="col-md-4 mb-4">
        <div class="card mt-4">
            <div class="card-header">
                <h5>${movieObj.title}</h5>
            </div>
            <div class="card-body">
                <figure class="imgHolder m-0">
                    <img src="${movieObj.url}" alt="">
                        <figcaption>
                            <p class="m-0">Rating ${movieObj.rating} / 5</p>
                        </figcaption>
                </figure>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
        
               `
    })
    movieContainer.innerHTML = res;
}
templating(movieArray) 


const onModalHandler = () => {
    backDrop.classList.toggle('active')
    ourModal.classList.toggle('active')
}

const onMovieSubmit = (eve) => {
    eve.preventDefault();
    let movieObj = {
        title: titleControl.value,
        rating: ratingControl.value,
        url: urlControl.value
    }
    movieArray.unshift(movieObj)
    templating(movieArray)           
    eve.target.reset();
    cl(movieArray)
    onModalHandler()
}


showModal.addEventListener('click', onModalHandler)
movieForm.addEventListener('submit', onMovieSubmit)

modalClose.forEach(ele => {
    ele.addEventListener('click', () => {
        onModalHandler()
    })
})
