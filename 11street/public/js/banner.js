(function(){
    "use strict"
    class Banner{
        constructor(){
            this.aimg = document.querySelectorAll("#banner .layout .banner .img");
            this.ali = document.querySelectorAll("#banner .layout .banner ul li");
            this.oleft = document.querySelector(".left");
            this.oright = document.querySelector(".right");
            this.obtn = document.querySelector(".banner button");
            this.oleft1 = document.querySelector(".xixi");
            this.oright1 = document.querySelector(".haha");
            this.obanner = document.querySelector("#banner");
            this.index=0
            this.addEvent();
            this.autoEvent();
        }
        addEvent(){

            var that=this;
            this.ali[0].style.background="rgba(237,50,71,.8)"
            for(let i=0;i<this.ali.length;i++){
                this.ali[i].onclick=function(){
                    for(var j=0;j<that.ali.length;j++){
                        that.ali[j].style.background="";
                    }
                    that.move(i)
                }
            };
            this.leftEvent();
            this.rightEvent();
            
            this.changeB();
        }
        leftEvent(){
            var that=this;
            this.oleft.onclick=function(){
                if(that.index==0){
                    that.index=that.aimg.length-1
                }else{
                    that.index--
                }
                that.move(that.index)
            };
        }
        rightEvent(){
            var that=this;
            this.oright.onclick=function(){
                if(that.index==that.aimg.length-1){
                    that.index=0
                }else{
                    that.index++
                }
                that.move(that.index)
            };

        }
        autoEvent(){
            let timer;
            this.onoff=1
            var that=this
            timer = setInterval(()=>{
                if(this.index==this.aimg.length-1){
                    this.index=0
                }else{
                    this.index++
                }
                this.move(this.index)
            },3000)
            this.obtn.onclick=function(){
                if(that.onoff==1){
                    this.style.backgroundPosition="-60px -37px";
                    clearInterval(timer)      
                    that.onoff=0
                }else{
                    this.style.backgroundPosition="-60px 0";
                    timer = setInterval(()=>{
                        if(that.index==that.aimg.length-1){
                            that.index=0
                        }else{
                            that.index++
                        }
                        that.move(that.index)
                    },3000)
                    that.onoff=1
                }
            }
        }
        changeB(){
            var that=this;
            this.obanner.onmouseover=function(){
                that.oleft.style.backgroundColor="rgba(0,0,0,0.4)"
                that.oright.style.backgroundColor="rgba(0,0,0,0.4)"
            }
            this.obanner.onmouseout=function(){
                that.oleft.style.backgroundColor=""
                that.oright.style.backgroundColor=""
            }
            that.oleft.onmouseover=function(){
                that.oleft1.style.cssText=`background:rgba(0,0,0,0.4);width:60px;height:60px;position:absolute;`                
            }
            that.oleft.onmouseout=function(){
                that.oleft1.style.backgroundColor="rgba(0,0,0,0.0)"               
            }
            that.oright.onmouseover=function(){
                that.oright1.style.cssText=`background:rgba(0,0,0,0.4);width:60px;height:60px;position:absolute;` 
            }
            that.oright.onmouseout=function(){
                that.oright1.style.backgroundColor="rgba(0,0,0,0.0)" 
            }
        }
        move(index){
            for(let i=0;i<this.aimg.length;i++){
                for(var j=0;j<this.aimg.length;j++){
                    this.aimg[j].style.display="none";
                    this.ali[j].style.background=""
                }
                this.aimg[index].style.display="block";
                this.ali[index].style.background="rgba(237,50,71,.8)"
            }
            switch(index){
                case 0: 
                    this.obanner.style.background="#e37fb1";
                    break;
                case 1: 
                    this.obanner.style.background="#5bb5b6";
                    break;
                case 2: 
                    this.obanner.style.background="#f8c1c7";
                    break;
                case 3: 
                    this.obanner.style.background="#5bb5b6";
                    break;
                    
                case 4: 
                    this.obanner.style.background="#a2c164";
                    break;
            }
        }
    }
    new Banner()
})()
