(function(){

    class Login{
        constructor(){
            this.user = document.querySelector("#txt1");
            this.pass = document.querySelector("#PW");
            this.btn = document.querySelector("#btn0");
            this.check = document.querySelector("#ck");
            console.log(this.user,this.pass,this.btn,this.check)
            this.init()
        }
        init(){
            var that = this;
            this.btn.onclick = function(){
                that.getUserMsg()
            }
        }
        getUserMsg(){
            this.usermsg = localStorage.getItem("usermsg") ? JSON.parse(localStorage.getItem("usermsg")) : [];
            this.checkOn()
        }
        checkOn(){
            for(var i=0;i<this.usermsg.length;i++){
                if(this.usermsg[i].user == this.user.value && this.usermsg[i].pass == this.pass.value){
                    this.usermsg[i].onoff = 1;
                    localStorage.setItem("usermsg",JSON.stringify(this.usermsg))
                    alert("登录成功，一秒后跳转到首页")                
                    setTimeout(() => {
                        location.href = "../index.html";
                    }, 1000);
                    return;
                }
            }
            alert("账号密码不符，清重新登录，或去注册") 
        }
    }


    new Login
})()
