define(function(){
    "use strict"
    class Lazy{
        constructor(){
            this.aimg = document.querySelectorAll("img");
            this.clientH = document.documentElement.clientHeight;
            this.lazylog()
            this.addEvent()
        }
        addEvent(){
            var that=this
            onscroll=function(){
                that.scrollT = document.documentElement.scrollTop;
                that.lazylog()
            }
        }
        lazylog(){
            for(var i=0;i<this.aimg.length;i++){
                if(this.aimg[i].src != "") continue;
                if(this.aimg[i].offsetTop < this.clientH + this.scrollT){
                    this.aimg[i].src = this.aimg[i].getAttribute("data-src");

                }
            }

        }
    }
    return {l:Lazy}
})