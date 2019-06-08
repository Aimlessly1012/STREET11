require.config({
    baseUrl:"public/js",
    paths:{
        ajax:"ajax.2.0",
        hot:"hot",
        tj:"tj",
        menu:"menu",
        rec:"rec",
        louti:"louti",
        index:"signindex",
        banner:"banner",
        search:"search",
        lazy:"lazy"

        

    }
})
require(["ajax","hot","tj","menu","rec","louti","signindex","banner","search","lazy"], function(ajax1,hot,tj,menu,rec,loutu,signindex,banner,search,lazy) {    
    new hot.h({ajax:ajax1.a})
    new tj.t({ajax:ajax1.a})
    new menu.m({ajax:ajax1.a})
    new rec.c({ajax:ajax1.a})
    new search.s({ajax:ajax1.a})
    new banner.b()
    new signindex.i()
    new lazy.l()
    
});


