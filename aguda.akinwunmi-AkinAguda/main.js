var nav = document.getElementById('nav');
var mask = document.getElementById("mask");
var links = document.getElementsByClassName('item');
var img = document.getElementsByTagName("header");
let shouldSlide = true;
nav.style.width = '0%';
function animHam(x) {
    x.classList.toggle("change");
    if(shouldSlide){
        if(window.matchMedia("(min-width : 640px)").matches){
            for(i = 0; i < links.length; i++){
                links[i].style.visibility = "visible";
            }
            nav.style.width = '35%';
        }
        else{
            for(i = 0; i < links.length; i++){
                links[i].style.visibility = "visible";
            }
            nav.style.width = '100%';
        }
        shouldSlide = false;
    }
    else{
        shouldSlide = true;
        nav.style.width = '0%';
        for(i = 0; i < links.length; i++){
            links[i].style.visibility = "hidden";
        }
    }
}
window.onscroll = function(){headerAnim()}
function headerAnim(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("top").classList.add("topAnim");
        document.getElementById("line").classList.add("lineVanish")
    }
    else{
        document.getElementById("top").classList.remove("topAnim");
        document.getElementById("line").classList.remove("lineVanish")
    }
}
function checkMedia(){
    if(window.matchMedia("(min-width : 768px)").matches){
        document.getElementById("top").appendChild(nav);
}
else{
    document.getElementById("navigation").appendChild(nav);
}
}
var images = ['url("images/stocks.jpg")', 'url("images/streets.jpg")', 'url("images/tech.jpg")']
var i=1;
function switchImage(){
    checkMedia();
        setInterval(function(){
                img[0].classList.add("flash");
                setTimeout(function(){
                    img[0].classList.remove("flash");
                },600)
                setTimeout(function(){
                    img[0].style.backgroundImage = images[i];
                },550)
                 i++;
                 if(i == images.length){
                    i = 0;
                 }
            },5000)
}
window.onresize = checkMedia();
var getNews = function(className, section, number, show){
    this.fetchApi = () => {
        fetch(`https://newsapi.org/v2/everything?q=${section}&apiKey=78c7a959be2d49cb8b88e9a2895ed5c9`)
        .then(function(result){
            return(result.json());
        })
        .then(function(print){
            var length = print.articles.length;
            var each = [0];
            for(i = each.length-1; i > 0; i--){
                var randomNo = Math.floor(Math.random()*(i+1));
                lasteach = each[i];
                each[i] = each[randomNo];
                each[randomNo] = lasteach;
            }
            console.log(each)
            for (i = each.length; i < length; i++){
                each.push(i);
            }
            console.log(print)
            for(i = 0; i != number; i++){
                document.getElementById(className).innerHTML += 
                `<div class = "card"><img src="${print.articles[each[i]].urlToImage}" 
                class="news-image"><p class = "caption">${print.articles[each[i]].title}"</p>
                <p class="story">${print.articles[each[i]].description}</p></div>`; 
            }
        })
    }
}
var news = new getNews("req", "bitcoin", "3", true);
news.fetchApi();
function move(param){
    param.scrollLeft = 400;
}
function slide(){

}