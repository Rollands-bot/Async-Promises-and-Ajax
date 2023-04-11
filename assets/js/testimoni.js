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

// TESTIMONY

class Testimonials {
    constructor(comment, image) {
        this._comment = comment
        this._image = image
    }

    get comment() {
        return this._comment
    }

    get image() {
        return this._image
    }

    get author() {
        return this._author
    }

    get toHtml() {
        return `<article class="card">
            <img src="${this.image}" class="photo-testimony"/>
            <p class="comment">"${this.comment}"</p>
            <p class="author">-${this.author}</p>
            </article>`
    }
}

class FirstTestimony extends Testimonials {
    constructor(first, comment, image) {
        super(comment, image)
        this._First = first
    }

    get author() {
        return this._First
    }
}

class SecondTestimony extends Testimonials {
    constructor(Second, comment, image) {
        super(comment, image)
        this._Second = Second
    }

    get author() {
        return this._Second
    }
}

class ThirdTestimony extends Testimonials {
    constructor(Third, comment, image) {
        super(comment, image)
        this._Third = Third
    }

    get author() {
        return this._Third
    }
}

class FourTestimony extends Testimonials {
    constructor(Four, comment, image) {
        super(comment, image)
        this._Four = Four
    }

    get author() {
        return this._Four
    }
}

class FiveTestimony extends Testimonials {
    constructor(Five, comment, image) {
        super(comment, image)
        this._Five = Five
    }

    get author() {
        return this._Five
    }
}

const testimony1 = new FirstTestimony("Lala Latifah", "Be yourself everyone else is already taken.", "https://plus.unsplash.com/premium_photo-1679619558496-56e08cb8ff2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", )

const testimony2 = new SecondTestimony("Ahfad Afrizal", "Then you sure as hell don't deserve me at my best.", "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")

const testimony3 = new ThirdTestimony("Diaz Hawa Saera", "To live is the rarest thing in the world. Most people exist, that is all.", "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" )

const testimony4 = new FourTestimony("Ahmad Solhani", "You only live once, but if you do it right, once is enough.", "https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")

const testimony5 = new FiveTestimony("Prasetyo Nugroho", "Be the change that you wish to see in the world.", "https://plus.unsplash.com/premium_photo-1676736592893-ddab05bc505e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" )

let testimonyData = [testimony1, testimony2, testimony3, testimony4, testimony5]
let testimonyHTML = "";

for (let i = 0; i < testimonyData.length; i++) {
    testimonyHTML += testimonyData[i].toHtml
}

document.getElementById("testimony").innerHTML = testimonyHTML