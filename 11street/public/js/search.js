define(function(){
    "use strict"
    class Search{
        constructor(options){
            this.ajax=options.ajax
            this.txt = document.getElementById("txt")
            this.list = document.getElementById("list")
            this.url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su"
            this.init()
        }
        init(){
            var that = this;
            this.txt.oninput = function(){
                document.documentElement.scrollTop=0
                that.value = this.value;
                that.list.style.display="block"
                that.load();
            }
            document.body.onclick=function(){
                that.list.style.display="none"
            }
        }
        load(){
            var that = this;
            this.ajax({
                url:this.url,
                data:{
                    wd:this.value,
                    cloumnName:"cb",
                    cb:"asdasdsa"
                },
                type:"jsonp",
                success:function(res){
                    that.res = res;
                    that.display()
                }
            })
        }
        display(){
            var str = "";
            for(var i=0;i<this.res.s.length;i++){
                str += `<li>${this.res.s[i]}</li>`
            }
            this.list.innerHTML = str;
        }
    }
    
    return {s:Search}




})