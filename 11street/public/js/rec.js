define(function(){
    "use strict"
    class Rec{
        constructor(options){
            this.ajax=options.ajax
            this.thCont=document.querySelector(".main-rec ul")
            this.url="http://localhost/11street/public/json/rec.json";
            this.index=0;
            this.aa=document.querySelectorAll(".main-rec .tjzq a")
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
            for(var i=this.index*14;i<this.index*14+14;i++){
                str+=`  <li>
                            <img src="${this.res[i].url}" alt="">
                        </li>
                
                        `
                    }
                this.thCont.innerHTML=str
        }
    }
    
    return {c:Rec}
})