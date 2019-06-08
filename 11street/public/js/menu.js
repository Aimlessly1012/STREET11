define(function(){
  class Xlmenu{
    constructor(options){
      this.ajax=options.ajax

      this.ali = document.querySelectorAll("nav .layout .yiji li");
      this.url="http://localhost/11street/public/json/secondform.json";
      this.getList(); 
    }
    getList(){
      var that=this
        this.ajax({
          url:this.url,
          success:function(res){
            that.res=JSON.parse(res),
            that.addEvent();
          }
        })
    }
    addEvent(){
      var that = this;
      var str="";
      
        
      for(let i=0;i<this.ali.length;i++){
        this.ali[i].onmouseover=function(eve){
          var e = eve ||window.event
          
          str =`<h3>${that.res[i].h3}</h3> 
                  <i></i>
                  <div class="erjic">
                    <a>${that.res[i].li1}</a>
                    <a>${that.res[i].li2}</a>
                    <a>${that.res[i].li3}</a>
                    <a>${that.res[i].li4}</a>
                    <a>${that.res[i].li5}</a>
                    <a>${that.res[i].li6}</a>
                    <a>${that.res[i].li7}</a>
                    <a>${that.res[i].li8}</a>
                    <a>${that.res[i].li9}</a>
                  </div>
                  `
          this.lastElementChild.style.display="block"
          this.lastElementChild.innerHTML=str
          // that.add3(e)
        }
        this.ali[i].onmouseout=function(){
          this.lastElementChild.style.display="none"
        }
      }
    }
    add3(e){
      var target = e.target||e.srcElement
      if(target.nodeName=="A"){
        if(target.children!=null){
          this.p=document.createElement("p")
          this.p.innerHTML="xixi"
          this.p.style.cssText="width:100px;height:100px;background:#fff;border:1px solid #999;z-index:30;position:relative"
          console.log(target)
          target.appendChild(this.p)
        }
      }


    }
  }

  return {m:Xlmenu}
})


