define(function(){
    "use strict"
    class Tjcx{
        constructor(options){
            this.ajax=options.ajax

            this.thCont=document.querySelector(".main-best .layout ul")
            this.url="http://localhost/11street/public/json/tjzq.json";
            this.index=0;
            this.aa=document.querySelectorAll(".main-best .layout .tjzq a")
            this.changeIndex()
            this.getList()
        }
        changeIndex(){
            var that=this
            that.aa[0].style.backgroundColor="#666";
            that.aa[0].style.color="#fff"
            for(let i=0;i<this.aa.length;i++){
                this.aa[i].onclick=function(){
                    for(let j=0;j<that.aa.length;j++){
                        that.aa[j].style.backgroundColor=""
                        that.aa[j].style.color="#666"
                    }
                   
                    that.aa[i].style.backgroundColor="#666";
                    that.aa[i].style.color="#fff";
                    that.index=i
                    that.addCont()
                }
            }
        }
        getList(){
            var that=this
            this.ajax({
                url:this.url,
                success:function(res){
                    that.res=JSON.parse(res)
                    that.addCont()
                }
            })
        }
        addCont(){
            var str =""
            for(var i=this.index*8;i<this.index*8+8;i++){
                str+=`  <li class="goods-cont">
                            <div class="cont-1">
                                <img src="${this.res[i].url}">
                                <p>${this.res[i].cont}</p>
                                <div>
                                    <span>${this.res[i].price}</span>
                                </div>
                            </div>
                        </li>
                        `
                    }
            this.thCont.innerHTML=str
            this.changeBorder();
            this.getlocal()

        }
        changeBorder(){
            var that=this
            this.thCont.onmouseover=function(eve){
                var e=eve||window.event
                var target=e.target || e.srcElement
                if(target.nodeName=="DIV"){
                    target.style.border=".5px solid red"
                }
                
            }
            this.thCont.onmouseout=function(eve){
                var e=eve||window.event
                var target=e.target || e.srcElement
                if(target.nodeName=="DIV"){
                    target.style.border=""
                }
            }
        }
        getlocal(){
            var that=this
            this.ali=document.querySelectorAll(".goods-cont");
            console.log(this.ali)
            for(var i=0;i<this.ali.length;i++){
                this.ali[i].onclick=function(){
                    this.src = this.children[0].children[0].src
                    this.cont = this.children[0].children[1].innerHTML
                    this.price = this.children[0].children[2].children[0].innerHTML
                    let goodsCont={src:this.src,cont:this.cont,price:this.price}
                    localStorage.setItem("goodsCont",JSON.stringify(goodsCont))
                    location.href = "http://localhost/11street/goodscont/goodsCont.html";
                    
                }
            }


        }




    }
    return {t:Tjcx}
})