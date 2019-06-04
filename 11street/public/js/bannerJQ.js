(function(){
    "use strict"
    var img1=$("#banner").children(".layout").children(".banner").children("img")
    var li1=img1.siblings("ul").children("li")
    var btn1=$("#banner").children(".layout").children(".banner").children("button")
    var left=$("#banner").children(".layout").children(".banner").children(".left")
    var right=$("#banner").children(".layout").children(".banner").children(".right")
    var banner =$("#banner").children(".layout").children(".banner")
    var banner1 =$("#banner")
    var index = 0
    var onoff=1
    li1.eq(index).css({background:"rgba(237,50,71,.8)"})
    li1.on("click",function(){
        move($(this).index())    
    });
    
    right.on("click",function(){
        if(index==li1.length-1){
            index=0
        }else{
            index++
        }
        move(index)
    });
    left.on("click",function(){
        if(index==0){
            index=li1.length-1
        }else{
            index--
        }
        move(index)
    });

    function move(index){
        img1.eq(index).siblings("img").hide().end().show()
        li1.eq(index).siblings("li").css({background:""}).end().css({background:"rgba(237,50,71,.8)"})
        // console.log(img1.eq(index).index())
        switch(img1.eq(index).index()){
            case 0: 
                banner1.css({backgroundColor:"#e37fb1"});break;
            case 1: 
                banner1.css({backgroundColor:"#5bb5b6"});break;
            case 2: 
                banner1.css({backgroundColor:"#f8c1c7"});break;
            case 3: 
                banner1.css({backgroundColor:"#5bb5b6"});break;
            case 4: 
                banner1.css({backgroundColor:"#a2c164"});break;
        }
    }


    var t 
    t=setInterval(()=>{
        right.trigger("click")
    },3000)
    
    btn1.on("click",function(){
        if(onoff==1){
            clearInterval(t)
            onoff=0
            btn1.css({backgroundPosition: "-60px -37px"})
        }else{
            t=setInterval(()=>{
                right.trigger("click")
            },3000)
            onoff=1
            btn1.css({backgroundPosition: "-60px 0px"})
        }
    })

    banner.on("mouseover",function(){
        $(this).children(".left").css({backgroundColor:"rgba(0,0,0,0.4)",
            backgroundPosition: "0 -120px"
        })
        $(this).children(".right").css({backgroundColor:"rgba(0,0,0,0.4)",
            backgroundPosition: "0 0"
        })
    })
    banner.on("mouseout",function(){
        $(this).children(".left,.right").css({backgroundColor:""})
        $(this).children(".left").css({backgroundPosition: "0 -180px"})
        $(this).children(".right").css({backgroundPosition: "0 -60px"})
        
    })
    // left.on("mouseenter",function(){
    //     $(this).css({backgroundColor:"rgba(0,0,0,0.7)"})
        
    // });
    // left.on("mouseleave",function(){
    //     $(this).css({backgroundColor:"rgba(0,0,0,0.4)"})
    // });
    // right.on("mouseover",function(){
        
    //     $(this).css({backgroundColor:"rgba(0,0,0,0.7)"})
    // })
    // right.on("mouseout",function(){
        
    //     $(this).css({backgroundColor:"rgba(0,0,0,0.4)"})
    // })

    

    // e37fb1  减肥
    // 5bb5b6  运动休息
    // 5bb5b6  露出
    // f8c1c7  ki
    // a2c164  新运动




})()