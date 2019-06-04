(function(){
    "use strict"

    var user=document.querySelector("#user")
    var pw1=document.querySelector("#pw")
    var pw2=document.querySelector("#pw2")
    var emil=document.querySelector("#eml")
    var check=document.querySelector("#ckb")
    var qr=document.querySelector(".qr")
    var aValidate = [false,false,false,false,false];
    user.onblur=function(){
        var sUser = user.value;
        var reg = /^[a-z0-9_\-\u4e00-\u9fa5]{4,20}$/gi
        if(reg.test(sUser)){
            user.nextElementSibling.innerHTML="符合规范"
			aValidate[0] = true;
		}else{
			user.nextElementSibling.style.color="red"
			user.nextElementSibling.innerHTML = "支持中文、字母、数字、“-”“_”的组合，4-20个字符";
			aValidate[0] = false;
		}
    }
	pw1.onblur = function(){

		var sPass = pw1.value;

		var reg = /^[^\\*\u4e00-\u9fa5]{6,20}$/

		if(reg.test(sPass)){
			var mark = 0;
			var hasNum = /\d/g
			if(hasNum.test(sPass)){
				mark++;
			}

			var hasLetter = /[a-z]/gi
			if(hasLetter.test(sPass)){
				mark++;
			}

			var hasSymbol = /[!@#\$%\^\.]/g

			if(hasSymbol.test(sPass)){
				mark++;
			}

			switch(mark){
				case 1:
                pw1.nextElementSibling.style.color = "#f10";
				pw1.nextElementSibling.innerHTML = "密码安全度低,建议使用组合密码!";
				break;
				case 2:
                pw1.nextElementSibling.style.color = "yellow";
				pw1.nextElementSibling.innerHTML = "密码中等,建议使用组合密码!";
				break;
				case 3:
				pw1.nextElementSibling.innerHTML = "符合要求";

				setTimeout(function(){
					pw1.nextElementSibling.innerHTML = "";
				}, 1000);
			}
			aValidate[1] = true;


		}else{
			pw1.nextElementSibling.style.color = "#000";
			pw1.nextElementSibling.innerHTML = "请输入符合规则的密码";

			aValidate[1] = false;
		}
    };
    pw2.onblur = function(){

		if(pw2.value == pw1.value){
			pw2.style.border = "1px solid #ddd";
			pw1.style.border = "1px solid #ddd";

			pw2.nextElementSibling.innerHTML="一致"

			aValidate[2] = true;
		}else{
			pw2.style.border = "2px solid red";
			pw2.nextElementSibling.innerHTML="密码输入不一致";
			pw1.style.border = "2px solid red";
			aValidate[2] = false;
		}
	}
    emil.onblur = function(){
        var sEmil = emil.value;
        var reg=/^\w{1,18}@[0-9a-zA-Z]{1,10}\.[a-zA-Z]{2,4}$/;
        if(reg.test(sEmil)){
            emil.nextElementSibling.innerHTML="符合";

            aValidate[3] = true;
        }else{
            emil.nextElementSibling.innerHTML="格式不对";
            aValidate[3] = false;
        }
    }
    qr.onclick = function(event){
        if(check.checked){
            aValidate[4] = true
            
        }else{
            aValidate[4] = false
        }
        console.log(aValidate)
        var isAllValidate = false; 
        reg()
		for(var i = 0 ; i < aValidate.length ; i++){
			if(aValidate[i] == true){



				setTimeout(() => {
                    location.href = "http://localhost/11street/Sign%20in/Sign%20in.html";
                }, 1000);
			}
		}
    }
    function reg(){
        var usermsg = localStorage.getItem("usermasg")
        if(usermsg == null){
            usermsg = [{
                user:user.value,
                pass:pw1.value,
                onoff:0
            }]
        }else{
            usermsg = JSON.parse(localStorage.getItem("usermsg"));
            for(var i=0;i<usermsg.length;i++){
                if(usermsg[i].user ==user.value){
                    msg.innerHTML = "重名";
                    return;
                }
            }
            usermsg.push({
                user:user.value,
                pass:pw1.value,
                onoff:0
            })
        }
        localStorage.setItem("usermsg",JSON.stringify(usermsg))
    }
})()