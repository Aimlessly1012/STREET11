define(function(){
    "use strict"
    class Hot{
        constructor(options){
            this.ajax=options.ajax
            this.liT=document.querySelectorAll(".main-hot-t li");
            this.ulB=document.querySelector(".main-hot-b");
            this.url="http://localhost/11street/public/json/hot.json";
            this.left=document.querySelector(".main-hot .left1");
            this.right=document.querySelector(".main-hot .right1");
            this.index=0;
            this.num=5;
            this.getList()
            this.addEvent()
            this.changeColor()
            
        }
        getList(){
            var that=this
            this.ajax({
                url:this.url,
                success:function(res){
                    that.res=JSON.parse(res)
                    that.res1=that.res.slice(0,10)
                    that.res2=that.res.slice(10,20)
                    that.res3=that.res.slice(20,30)
                    that.res4=that.res.slice(30)
                    that.res = [that.res1,that.res2,that.res3,that.res4]
                    that.addBtn(that.res[0])
                    that.addCont(that.res[0],0)
                    
                }
            });
        }

        addCont(res,index){
            var that=this
            var str=""
            for(var i=index*this.num;i<index*this.num+this.num;i++){
                str+=`<li class="goods-cont">
                        <div class="cont-1">
                            <img src="${res[i].url}" >
                            <p>${res[i].cont}</p>
                            <div>
                                <span>${res[i].price}</span>
                            </div>
                            <i>${res[i].id}</i>
                        </div>
                    </li>
                    `
            }

            this.ulB.innerHTML=str
            this.changeBorder()
        }
        changeBorder(){
            var that=this
            this.ulB.onmouseover=function(eve){
                var e=eve||window.event
                var target=e.target || e.srcElement
                if(target.nodeName=="DIV"){
                    target.style.border=".5px solid red"
                }
                
            }
            this.ulB.onmouseout=function(eve){
                var e=eve||window.event
                var target=e.target || e.srcElement
                if(target.nodeName=="DIV"){
                    target.style.border=""
                }
            }
        }

        addEvent(){
            var that=this
            this.liT[0].firstElementChild.style.backgroundColor="#f43142";
            for(let i = 0; i<this.liT.length;i++){
                this.liT[i].onclick=function(){
                    for(let j = 0; j<that.liT.length;j++){
                        that.liT[j].firstElementChild.style.backgroundColor="#f4f6f8";
                    }
                    that.liT[i].firstElementChild.style.backgroundColor="#f43142";
                    that.addCont(that.res[i],0)
                    that.addBtn(that.res[i])
                    
                }
            }
        }
        addBtn(res){
            var that=this
            var onoff=0
            this.left.onclick=function(){
                if(onoff==0){
                    that.index=1
                    that.addCont(res)
                    onoff=1
                }else{
                    that.index=0
                    that.addCont(res,0)
                    onoff=0
                }

            };
            this.right.onclick=function(){
                if(onoff==0){
                    that.index=1
                    that.addCont(res,1)
                    onoff=1
                }else{
                    that.index=0
                    that.addCont(res,0)
                    onoff=0
                }

            };
        }
        changeColor(){
            var that=this
            this.left.onmouseover=function(){
                this.style.backgroundColor="rgba(0,0,0,.8)"
            }
            this.left.onmouseout=function(){
                this.style.backgroundColor="rgba(0,0,0,.4)"
            }
            this.right.onmouseover=function(){
                this.style.backgroundColor="rgba(0,0,0,.8)"
                
            }
            this.right.onmouseout=function(){
                this.style.backgroundColor="rgba(0,0,0,.4)"
            }
            for(let i = 0; i<this.liT.length;i++){
                this.liT[i].onmouseover=function(){
                    for(let j = 0; j<that.liT.length;j++){
                        that.liT[j].style.borderBottom="none"
                    }
                    this.style.borderBottom="3px solid rgb(244, 49, 66)"
                }
            }
            for(let i = 0; i<this.liT.length;i++){
                this.liT[i].onmouseout=function(){
                    this.style.borderBottom="none"
                }
            }
        }
    };
    return {h:Hot};
})