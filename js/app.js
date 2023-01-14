//
//
//
//
//
//
//
//
//
//
// problem 2

const h2Tag = document.getElementsByTagName("h2");

for (h2 of h2Tag) {
  h2.style.color = "red";
}

// problem 3
document.getElementById("backpack").style.backgroundColor = "tomato ";
const cards = document.getElementsByClassName("card");
// problem 4
for (card of cards) {
  card.style.borderRadius = "30px";
}

// problem 5

// problem 6

// problem 7

const inpout = document.getElementById("input");
const submit = document.getElementById("submit");
if (inpout.value === "delete") {
  submit.removeAttribute("disabled", true);
}
