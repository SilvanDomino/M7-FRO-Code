import { LikeButton, ShareButton, CommentButton, BookmarkButton } from "./Button.js";

export class Post{
  header;
  main;
  footer;
  htmlElement;
  data;

  constructor(data, parent){
    this.parent = parent;
    this.data = data;

    this.htmlElement = document.createElement("article");
    this.htmlElement.classList = "post";
    this.createHeader();
    this.createBody();
    this.createFooter();
    this.render();
  }

  createHeader(){
    this.header = document.createElement("header");
    this.header.classList = "post__header";
    let postUser = document.createElement("div");
    postUser.classList = "post__user";
    
    let avatar = document.createElement("img");
    avatar.classList = "user__avatar";
    avatar.src =  "https://robohash.org/rerumminussuscipit.png?size=40x40&set=set3";
    avatar.alt = "avatar image of user";
    let userName = document.createElement("h3");
    userName.classList = "user__name";
    userName.innerText = this.data.user;
    postUser.appendChild(avatar);
    postUser.appendChild(userName);
    this.header.appendChild(postUser);
    let postFollow = document.createElement("post__follow");
    postFollow.classList = "post__follow";
    postFollow.innerText = "Follow";
    this.header.appendChild(postFollow);
  }
  createBody(){
    this.main = document.createElement("main");
    this.main.classList = "post__body";
    let bodyimg = document.createElement("img");
    bodyimg.classList = "post__img";
    bodyimg.src = this.data.img;
    bodyimg.alt = "instagram img";
    this.main.appendChild(bodyimg);
  }
  createFooter(){
    this.footer = document.createElement("footer");
    this.footer.classList = "post__footer";
    let likeButton = new LikeButton(this.footer);
    let commentButton = new CommentButton(this.footer);
    let shareButton = new ShareButton(this.footer);
    let bookmarkButton = new BookmarkButton(this.footer);
  }
  render(){
    this.htmlElement.appendChild(this.header);
    this.htmlElement.appendChild(this.main);
    this.htmlElement.appendChild(this.footer);
    
    this.parent.appendChild(this.htmlElement);
  }
}

export class TextPost extends Post{
  //Schrijf hier code om een textpost te maken
  //Tip: Welke code zou overschreven/aangepast moeten worden voor text in de body/main?
}
