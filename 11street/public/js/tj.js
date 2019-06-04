(function(){
    "use strict"
    class Tjcx{
        constructor(){
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
            ajax({
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
                str+=`  <li>
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
        }
    }
    new Tjcx()
})()