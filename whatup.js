function chat(){
    document.querySelector(".openchatbox").style.display="none"; 
    document.querySelector(".main").style.display="block";
    document.querySelector(".status").style.display="none";
    document.querySelector(".calls").style.display="none";
    
}
function status(){
    document.querySelector(".main").style.display="none";
    document.querySelector(".status").style.display="flex";
    document.querySelector(".calls").style.display="none";
    document.querySelector(".openchatbox").style.display="none"; 
}
function calls(){
    document.querySelector(".main").style.display="none";
    document.querySelector(".status").style.display="none";
    document.querySelector(".calls").style.display="flex";
    document.querySelector(".openchatbox").style.display="none"; 
}
function search(){
    document.querySelector(".nav").style.display="none"; 
    document.querySelector(".searchbar").style.display="flex";
    document.querySelector(".openchatbox").style.display="none"; 
}
function searchbarback(){
    document.querySelector(".nav").style.display="block"; 
    document.querySelector(".searchbar").style.display="none";
    document.querySelector(".openchatbox").style.display="none"; 
}
function openchatbox(){
    document.querySelector(".openchatbox").style.display="block"; 
    document.querySelector(".main").style.display="none";
    document.querySelector(".status").style.display="none";
    document.querySelector(".calls").style.display="none"; 
    document.querySelector(".nav").style.display="none"; 
}
function closechatbox(){
    document.querySelector(".openchatbox").style.display="none"; 
    document.querySelector(".main").style.display="block";
    document.querySelector(".nav").style.display="block"; 
}