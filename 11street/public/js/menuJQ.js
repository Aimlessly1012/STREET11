(function(){
  class Xlmenu{
    constructor(){
      this.li=$("nav").children(".layout").children(".yiji").children("li");
      this.url="http://localhost/11street/public/json/secondform.json";
      this.getList();
      this.addEvent();
    }
    getList(){
      var that=this;
      $.getJSON(
        this.url,
        function(res){
          console.log(res);
          that.res=res;
          
        }
      )
    }

    addEvent(){
      var that =this;
      this.li.on("mouseover",function(){
        $(this).siblings("li").css({background:"#000"}).end().css({background:"#fff"}).siblings().children("a").css({color:"#fff"});
        $(this).children("a").css({color:"#000"});
        if($(this).children("div").attr("class")!="erji"){
          that.odiv=$('<div class="erji"><div>');
          var str="";
          str+=`<h3>${that.res[$(this).index()].h3}</h3> 
                <i></i>
                <div class="erjic">
                    <a>${that.res[$(this).index()].li1}</a>
                    <a>${that.res[$(this).index()].li2}</a>
                    <a>${that.res[$(this).index()].li3}</a>
                    <a>${that.res[$(this).index()].li4}</a>
                    <a>${that.res[$(this).index()].li5}</a>
                    <a>${that.res[$(this).index()].li6}</a>
                    <a>${that.res[$(this).index()].li7}</a>
                    <a>${that.res[$(this).index()].li8}</a>
                    <a>${that.res[$(this).index()].li9}</a>
                </div>
                `
          that.odiv.html(str)
          that.odiv.appendTo($(this))
          that.odiv.show()
        }
      })
      this.li.on("mouseout",function(){
        $(this).css({background:"#000"}).children("a").css({color:"#fff"})
      })
    }
    




  }
  
  
   






})()