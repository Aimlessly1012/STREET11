(function(){
    "use strict"
    var ali=document.querySelectorAll("figure ul li")
    var scrollTop=document.documentElement.scrollTop
    ali[0].onclick=function(){
        document.documentElement.scrollTop=0
    }
    ali[1].onclick=function(){
        document.documentElement.scrollTop=700
    }
    ali[2].onclick=function(){
        document.documentElement.scrollTop=1130
    }
    ali[3].onclick=function(){
        document.documentElement.scrollTop=2210
    }
    ali[4].onclick=function(){
        document.documentElement.scrollTop=2780
    }
    ali[5].onclick=function(){
        document.documentElement.scrollTop=3120
    }
})()