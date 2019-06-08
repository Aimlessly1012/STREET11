(function(){
    class Car{
        constructor(){
            this.tbody=document.querySelector("tbody");
            this.addEvent()
        };
        getAjax(){
            var that=this;
            ajax({
                url:this.url,
                success:function(res){
                    that.res=JSON.parse(res);
                    console.log(that.res);
                    that.getC();


                }
            })
        }
        getC(){
            this.goods=JSON.parse(localStorage.getItem("sp"));
            console.log(this.goods)
            this.display();
        }
        display(){
            var str=""           
            for(var i=0 ;i<this.goods.length;i++){
                    str+=`<tr>
                            <td><input type="checkbox"></td>
                            <td><img src="${this.goods[i].src}" ></td>
                            <td>${this.res[i].cont}</td>
                            <td>${this.res[i].price}</td>
                            <td><input type="number" value="${this.goods[i].num}" min=1 class="${this.goods[j].id}"/></td>
                            <td><span id="${this.goods[i].id}">删除</span></td>
                        </tr>`
                        //   console.log(this.res[i].goodsId)
                
            }
            
            this.tbody.innerHTML=str
        }
        addEvent(){
            var that = this
            this.tbody.addEventListener("click",function(eve){
                var e=eve ||window.event;
                var target=e.target||e.srcElement;
                for(let i=0;i<that.goods.length;i++){
                    if(target.id==that.goods[i].id){
                        that.goods.splice(i,1)
                        that.setC()
                        that.display()
                    }
                }
            });
            this.tbody.addEventListener("input",function(eve){
                var e=eve ||window.event;
                var target=e.target||e.srcElement;
                for(let i=0;i<that.goods.length;i++){
                    if(target.className==that.goods[i].id){
                        that.goods[i].num=eve.target.value
                        that.setC()
                    }
                }
            })
        }
        setC(){
            localStorage.setItem("sp",JSON.stringify(this.goods))
        }
    }
new Car()
})()
