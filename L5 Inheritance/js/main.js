import { Post, TextPost } from "./Components/Post.js";

let body = document.getElementById("app");

let data1 = {
  user: "Caldera Smallcaller",
  id: 234324,
  img: "https://picsum.photos/600/401"
}
let data2 = {
  user: "ScoobyDoodles",
  id: 43577,
  img: "https://picsum.photos/600/400"
}
let data3 = {
  user: "Vivien_on_the_hunt",
  id: 43577,
  img: "https://picsum.photos/601/400"
}


new Post(data1, body);
new Post(data2, body);
new Post(data3, body);



