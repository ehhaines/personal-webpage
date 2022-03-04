
document.addEventListener("scroll", function() {
  this.getElementById("intro").style.opacity = 1;
});

let git = document.getElementById("git");

git.addEventListener("mouseover", function() {
  git.style.opacity = 1;
});

git.addEventListener("mouseout", function() {
  git.style.opacity = 0.7;
});

let linked = document.getElementById("linked");

linked.addEventListener("mouseover", function() {
  linked.style.opacity = 1;
});

linked.addEventListener("mouseout", function() {
  linked.style.opacity = 0.7;
});

let insta = document.getElementById("insta");

insta.addEventListener("mouseover", function() {
  insta.style.opacity = 1;
});

insta.addEventListener("mouseout", function() {
  insta.style.opacity = 0.7;
});

let twitter = document.getElementById("twitter");

twitter.addEventListener("mouseover", function() {
  twitter.style.opacity = 1;
});

twitter.addEventListener("mouseout", function() {
  twitter.style.opacity = 0.7;
});
