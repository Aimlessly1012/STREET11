class Index{
    constructor(){
        this.notLogin = document.querySelectorAll(".not-login")
        this.loginS = document.querySelector(".login-success")
        this.user = document.querySelector(".login-success em")

        this.logout = document.querySelector(".logout");

        this.init();
        this.addEvent();
    }
    addEvent(){
        this.logout.onclick = ()=>{
            for(var i=0;i<this.usermsg.length;i++){
                if(this.name == this.usermsg[i].user){
                    this.usermsg[i].onoff = 0;
                    this.notLogin[0].style.display = "block";
                    this.notLogin[1].style.display = "block";
                    
                    this.loginS.style.display = "none";
                    this.logout.style.display = "none";
                    localStorage.setItem("usermsg",JSON.stringify(this.usermsg))
                    return ;
                }
            }
        }
    }
    init(){
        this.usermsg = localStorage.getItem("usermsg") ? JSON.parse(localStorage.getItem("usermsg")) : [];
        this.check()
    }
    check(){
        for(var i=0;i<this.usermsg.length;i++){
            if(this.usermsg[i].onoff == 1){
                this.notLogin[0].style.display = "none";
                this.notLogin[1].style.display = "none";
                this.logout.firstElementChild.innerHTML="注销"
                this.user.innerHTML = `欢迎${this.usermsg[i].user}`;
                this.name = this.usermsg[i].user;
                
                return;
            }
        }
    }
}

new Index;