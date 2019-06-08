(function(){
    "use strict"
    class Goodsconts{
        constructor(){
            this.good=JSON.parse(localStorage.getItem("goodsCont"))
            this.sImg=document.querySelector(".s_box img")
            this.bImg=document.querySelector(".b_box img")
            this.h3=document.querySelector(".xq-r-t h3")
            this.p=document.querySelector(".xq-r-t p")
            this.gwc=document.querySelector("#gwc")
            this.p.innerHTML=this.good.price
            this.h3.innerHTML=this.good.cont
            this.sImg.src=this.good.src
            this.bImg.src=this.good.src
            this.addEvevnt()
        }
        addEvevnt(){
            var that=this
            this.gwc.onclick=function(){
                that.set()
            }



        }
        set(){
            this.goods = localStorage.getItem("sp");
            if(this.goods){
                this.goods = JSON.parse(this.goods);
                var onoff=true;
                console.log(this)
                for(var i = 0;i<this.goods.length;i++){
                    if(this.goods[i].src == this.goods.src){
                        this.goods[i].num ++;
                        onoff = false;
                    }
                }
                    if(onoff){
                        this.goods.push({
                            src:this.good.src,
                            cont:this.good.cont,
                            price:this.good.price,
                            num:1
                        })
                    }
                localStorage.setItem("sp",JSON.stringify(this.goods))
            }else{

                this.goods=[{
                    src:this.good.src,
                    cont:this.good.cont,
                    price:this.good.price,
                    num:1
                }]
                localStorage.setItem("sp",JSON.stringify(this.goods))
            }
        }

    }
    new Goodsconts
})()