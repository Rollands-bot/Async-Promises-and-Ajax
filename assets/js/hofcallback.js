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

const testimonialData = [
    {
        name: "Lala Latifah",
        comment: "Be yourself everyone else is already taken.",
        rating: 5,
        image: "https://plus.unsplash.com/premium_photo-1679619558496-56e08cb8ff2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        name: "Ahfad Afrizal",
        comment:  "Then you sure as hell don't deserve me at my best.",
        rating: 3,
        image:  "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        name: "Diaz Hawa Saera",
        comment: "To live is the rarest thing in the world. Most people exist, that is all.", 
        rating: 1,
        image: "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        name:"Ahmad Solhani",
        comment: "You only live once, but if you do it right, once is enough.",
        rating: 4,
        image: "https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        name:"Prasetyo Nugroho", 
        comment: "Be the change that you wish to see in the world.", 
        rating: 5,
        image: "https://plus.unsplash.com/premium_photo-1676736592893-ddab05bc505e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
    },
]

function showTestimonial() {
    let testimonialForHtml = ''

    testimonialData.forEach((item) => {
        testimonialForHtml += `<div class="card">
        <img src=${item.image} class="photo-testimony" />
        <p class="quote">${item.comment}</p>
        <p class="author">- ${item.name}</p>
        <p class="rating">${item.rating} <i class="fa-solid fa-star"></i></p> 
    </div>`
    })

    document.getElementById("testimony").innerHTML = testimonialForHtml
}
showTestimonial()


// function for filtering testimonials
function filterTestimonials(rating) {
    let testimonialForHtml = ''

    const dataFiltered = testimonialData.filter(function (data) {
        return data.rating === rating
    })
    console.log(dataFiltered)

    if(dataFiltered.length === 0) {
        testimonialForHtml = `<h3>Data not found ! </h3>`
    } else {
        dataFiltered.forEach((data) => {
            testimonialForHtml += `<div class="card">
                <img src=${data.image} class="photo-testimony" />
                <p class="quote">${data.comment}</p>
                <p class="author">- ${data.name}</p>
                <p class="rating">${data.rating} <i class="fa-solid fa-star"></i></p>
            </div>`
        })
    }

    document.getElementById("testimony").innerHTML = testimonialForHtml
}