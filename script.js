/* KODE TIL SCROLL I SORTERING */

const sortering = document.getElementById("sortering");
const scrollAmount = 300; /* bestemmer hvor meget der scrolles pr klik */

document.getElementById("scroll-left").onclick = function() {

    sortering.scrollLeft = sortering.scrollLeft - scrollAmount;
}

document.getElementById("scroll-right").onclick = function() {
    sortering.scrollLeft = sortering.scrollLeft + scrollAmount;
}


/* KODE TIL SORTERINGS KANPPERNE */

function sorterProdukter(kategori) {

    /*querySelectorAll finder ALLE produkterne*/

    const produkter = document.querySelectorAll(".produkt-kort");

    const knapper = document.querySelectorAll("#sortering button");

    /* fjern aktiv fra alle knapper */

    knapper.forEach(function(btn) {
        btn.classList.remove("active");
    });

    /* sæt aktive på den knap der matcher kategorien */

    document.getElementById(kategori).classList.add("active");

    /*Tjekker hvert produkt om det passer med kategorien*/

    produkter.forEach(function(produkt) {
         /*vis alle produkter*/
        if (kategori === "alle") {
            produkt.style.display = "block";
        }
        else if (produkt.classList.contains(kategori)) {
            /* vis kun produkter der matcher kategorien*/
            produkt.style.display = "block";
        }
        else {
            /*skjul produkter der ikke matcher*/
            produkt.style.display = "none";
        }
    });

}

/*klik events til kanpperne */

document.getElementById("alle").onclick = function() {
    sorterProdukter("alle");
}

document.getElementById("kaffe").onclick = function() {
    sorterProdukter("kaffe");
}

document.getElementById("the").onclick = function() {
    sorterProdukter("the");
}

document.getElementById("soede-sager").onclick = function() {
    sorterProdukter("soede-sager");
}

document.getElementById("drik").onclick = function() {
    sorterProdukter("drik");
}

document.getElementById("gave").onclick = function() {
    sorterProdukter("gave");
}