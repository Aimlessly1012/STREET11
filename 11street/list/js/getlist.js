(function(){
    "use strict"
    class List{
        constructor(){
            this.ul=document.querySelector("main ul")
            this.url="http://localhost/11street/list/json/sp.json"
            this.left=document.getElementById("btnL");
            this.right=document.getElementById("btnR");
            this.pageCont=document.getElementById("pageCont");
            this.num=10;
            this.index=0;
            this.getList()
            this.addEvent()
        }
        getList(){
            var that = this;
            ajax({
                url:this.url,
                success:function(res){
                    // console.log(res)
                    that.res=JSON.parse(res)
                    // console.log(that.res)
                    that.addCont()
                    that.createPage()
            
                }
            })
        };
        addCont(){
            
            var str=""
            for(var i=this.index*this.num;i<this.index*this.num+this.num;i++){
                if(i<this.res.length){
                    str+=`<li class="${this.res[i].id} goods-cont">
                            <div class="cont-1">
                                <img data-src="${this.res[i].url}" >
                                <p>${this.res[i].cont}</p>
                                <div>
                                    <span>￥${this.res[i].pirse}</span>
                                </div>
                                <i>${this.res[i].id}</i>
                            </div>
                        </li>
                        `
                }
            }
            this.ul.innerHTML=str
            this.changeBorder()
            new Lazy()
            this.getlocal()
        };

        changeBorder(){
            var that=this
            this.ul.onmouseover=function(eve){
                var e=eve||window.event
                var target=e.target || e.srcElement
                if(target.nodeName=="DIV"){
                    target.style.border="1px solid red"
                }
                
            }
            this.ul.onmouseout=function(eve){
                var e=eve||window.event
                var target=e.target || e.srcElement
                if(target.nodeName=="DIV"){
                    target.style.border=""
                }
            }

        }






        createPage(){
            this.maxNum=Math.ceil(this.res.length/this.num);
            var str=""
            for(var i=0;i<this.maxNum;i++){
                str+=`<li>${i+1}</li>`
            }
            this.pageCont.innerHTML=str;
            this.pageCont.children[this.index].className="active";
        };
        addEvent(){
            var that=this;
            this.left.onclick=function(){
                that.changePage("l")
            };
            this.right.onclick=function(){
                that.changePage("r")
               
            }
        };
        changePage(type){
            if(type=="l"){
                if(this.index==0){
                    this.index=this.maxNum-1;
                }else{
                    this.index--
                }
            }else{
                if(this.index==this.maxNum-1){
                    this.index=0;
                }else{
                    this.index++;
                }
            }
            this.stylePage()
            this.addCont()
        };
        stylePage(){
            for(var i=0;i<pageCont.children.length;i++){
                this.pageCont.children[i].className="";
            }
            this.pageCont.children[this.index].className="active";

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
new List
})()