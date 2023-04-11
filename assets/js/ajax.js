// HAMBURGER

listMenuIsOpen = false;
function openListMenu() {
  let listMenu = document.getElementById("menu");
  if (!listMenuIsOpen) {
    listMenu.style.display = "block";
    listMenuIsOpen = true;
  } else {
    listMenu.style.display = "none";
    listMenuIsOpen = false;
  }
}

const testimonial = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api.npoint.io/6729c512f38a902b4526", true)

    xhr.onload = function (){
        if(xhr.status == 200) {
            resolve(JSON.parse(xhr.response))
        } else {
            reject("Error loading data")
        }
    }

    xhr.onerror = function() {
        reject("Network Error")
    }

    xhr.send()
})

async function getAllTestimonial() {
    const response = await testimonial

    let testimonialForHtml = ""
    response.forEach((item) => {
        testimonialForHtml += `<div class="card">
        <img src=${item.image} class="photo-testimony" />
        <p class="quote">${item.comment}</p>
        <p class="author">- ${item.name}</p>
        <p class="rating">${item.rating} <i class="fa-solid fa-star"></i></p> 
    </div>`
    })

    document.getElementById("testimony").innerHTML = testimonialForHtml
}
getAllTestimonial()


async function filterTestimonials(rating) {
    const response =  await testimonial
    let testimonialHTML = '';

    const testimonialFiltered = response.filter(function (item) {
        return item.rating === rating;
    })

    if (testimonialFiltered.length === 0) {
        testimonialHTML = `<h1> Data not found! </h1>`
    } else {
        testimonialFiltered.forEach(function (item) {
            testimonialHTML += `<div class="card">
            <img src=${item.image} class="photo-testimony" />
            <p class="quote">${item.comment}</p>
            <p class="author">- ${item.name}</p>
            <p class="rating">${item.rating} <i class="fa-solid fa-star"></i></p> 
        </div>`
        })
    }

    document.getElementById('testimony').innerHTML = testimonialHTML;
}
