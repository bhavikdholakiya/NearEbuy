window.onload = function(){
    let pos,i;
    var img = document.getElementsByClassName("img-space");
    var holder = document.getElementsByClassName("holder")[0];
    var holderwidth = window.getComputedStyle(holder).getPropertyValue('width');
    document.documentElement.style.setProperty('--holder-width', `${holderwidth}`);
    document.getElementById("dot1").onclick = () => {
        pos = window.getComputedStyle(img[0]).getPropertyValue('left');
        img[0].style.animation = `none`;
        document.documentElement.style.setProperty('--curr', `${pos}`);
        img[0].style.animation = `1.2s ease 0s 1 normal forwards running imgO0`;
        setTimeout(() => {
            img[0].style.animation = `none`;    
            img[0].style.animation = `24s ease 0s infinite normal forwards running img0`;
        }, 1200);
    }
    document.getElementById("dot2").onclick = () => {
        pos = window.getComputedStyle(img[0]).getPropertyValue('left');
        img[0].style.animation = `none`;
        document.documentElement.style.setProperty('--curr', `${pos}`);
        img[0].style.animation = `1.2s ease 0s 1 normal forwards running imgO1`;
        setTimeout(() => {
            img[0].style.animation = `none`;    
            img[0].style.animation = `24s ease 0s infinite normal forwards running img1`;
        }, 1200);
    }
    document.getElementById("dot3").onclick = () => {
        pos = window.getComputedStyle(img[0]).getPropertyValue('left');
        img[0].style.animation = `none`;
        document.documentElement.style.setProperty('--curr', `${pos}`);
        img[0].style.animation = `1.2s ease 0s 1 normal forwards running imgO2`;
        setTimeout(() => {
            img[0].style.animation = `none`;    
            img[0].style.animation = `24s ease 0s infinite normal forwards running img2`;
        }, 1200);
    }
    document.getElementById("dot4").onclick = () => {
        pos = window.getComputedStyle(img[0]).getPropertyValue('left');
        img[0].style.animation = `none`;
        document.documentElement.style.setProperty('--curr', `${pos}`);
        img[0].style.animation = `1.2s ease 0s 1 normal forwards running imgO3`;
        setTimeout(() => {
            img[0].style.animation = `none`;    
            img[0].style.animation = `24s ease 0s infinite normal forwards running img3`;
        }, 1200);
    }
    
    document.querySelector(".content .slider .left").onclick = () => {
        var viewportWidth =(-0.95)* window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        poschar = window.getComputedStyle(img[0]).getPropertyValue('left');
        pos = parseInt(poschar.substring(0,poschar.length-2));
        if(pos<=0 && pos>-50){
            img[0].style.animation = `none`;
            document.documentElement.style.setProperty('--curr', `${pos}px`);
            img[0].style.animation = `1.2s ease 0s 1 normal forwards running imgO3`;
            setTimeout(() => {
                img[0].style.animation = `none`;    
                img[0].style.animation = `24s ease 0s infinite normal forwards running img3`;
            }, 1200);
        }
        else if(pos<=viewportWidth+50 && pos>viewportWidth-50){
            img[0].style.animation = `none`;
            document.documentElement.style.setProperty('--curr', `${pos}px`);
            img[0].style.animation = `1.2s ease 0s 1 normal forwards running imgO0`;
            setTimeout(() => {
                img[0].style.animation = `none`;    
                img[0].style.animation = `24s ease 0s infinite normal forwards running img0`;
            }, 1200);
        }
        else if(pos<=(2*viewportWidth)+50 && pos>(2*viewportWidth)-50){
            img[0].style.animation = `none`;
            document.documentElement.style.setProperty('--curr', `${pos}px`);
            img[0].style.animation = `1.2s ease 0s 1 normal forwards running imgO1`;
            setTimeout(() => {
                img[0].style.animation = `none`;    
                img[0].style.animation = `24s ease 0s infinite normal forwards running img1`;
            }, 1200);
        }
        else if(pos<=(3*viewportWidth)+50 && pos>(3*viewportWidth)-50){
            img[0].style.animation = `none`;
            document.documentElement.style.setProperty('--curr', `${pos}px`);
            img[0].style.animation = `1.2s ease 0s 1 normal forwards running imgO2`;
            setTimeout(() => {
                img[0].style.animation = `none`;    
                img[0].style.animation = `24s ease 0s infinite normal forwards running img2`;
            }, 1200);
        }
    }
    document.querySelector(".content .slider .right").onclick = () => {
        var viewportWidth =(-0.95)* window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        // console.log(viewportWidth);
        poschar = window.getComputedStyle(img[0]).getPropertyValue('left');
        pos = parseInt(poschar.substring(0,poschar.length-2));
        if(pos<=0 && pos>-50){
            img[0].style.animation = `none`;
            document.documentElement.style.setProperty('--curr', `${pos}px`);
            img[0].style.animation = `1.2s ease 0s 1 normal forwards running imgO1`;
            setTimeout(() => {
                img[0].style.animation = `none`;    
                img[0].style.animation = `24s ease 0s infinite normal forwards running img1`;
            }, 1200);
        }
        else if(pos<=viewportWidth+50 && pos>viewportWidth-50){
            img[0].style.animation = `none`;
            document.documentElement.style.setProperty('--curr', `${pos}px`);
            img[0].style.animation = `1.2s ease 0s 1 normal forwards running imgO2`;
            setTimeout(() => {
                img[0].style.animation = `none`;    
                img[0].style.animation = `24s ease 0s infinite normal forwards running img2`;
            }, 1200);
        }
        else if(pos<=(2*viewportWidth)+50 && pos>(2*viewportWidth)-50){
            img[0].style.animation = `none`;
            document.documentElement.style.setProperty('--curr', `${pos}px`);
            img[0].style.animation = `1.2s ease 0s 1 normal forwards running imgO3`;
            setTimeout(() => {
                img[0].style.animation = `none`;    
                img[0].style.animation = `24s ease 0s infinite normal forwards running img3`;
            }, 1200);
        }
        else if(pos<=(3*viewportWidth)+50 && pos>(3*viewportWidth)-50){
            img[0].style.animation = `none`;
            document.documentElement.style.setProperty('--curr', `${pos}px`);
            img[0].style.animation = `1.2s ease 0s 1 normal forwards running imgO0`;
            setTimeout(() => {
                img[0].style.animation = `none`;    
                img[0].style.animation = `24s ease 0s infinite normal forwards running img0`;
            }, 1200);
        }
    }
    var cathead1 = document.getElementsByClassName("cathead")[0];
    var cathead2 = document.getElementsByClassName("cathead")[1];
    var cathead3 = document.getElementsByClassName("cathead")[2];
    cathead1.onmouseover = () => {
        document.querySelectorAll(".content .products .cathead img")[0].style.transform = 'scale(1.5)';
        document.querySelectorAll(".content .products .cathead span")[0].style.bottom = '-100px';
        document.querySelectorAll(".content .products .cathead .grad")[0].style.top = '250px';
    }
    cathead1.onmouseout = () => {
        document.querySelectorAll(".content .products .cathead img")[0].style.transform = 'scale(1)';
        document.querySelectorAll(".content .products .cathead span")[0].style.bottom = '5px';
        document.querySelectorAll(".content .products .cathead .grad")[0].style.top = '0px';
    }
    cathead2.onmouseover = () => {
        document.querySelectorAll(".content .products .cathead img")[1].style.transform = 'scale(1.5)';
        document.querySelectorAll(".content .products .cathead span")[1].style.bottom = '-100px';
        document.querySelectorAll(".content .products .cathead .grad")[1].style.top = '250px';
    }
    cathead2.onmouseout = () => {
        document.querySelectorAll(".content .products .cathead img")[1].style.transform = 'scale(1)';
        document.querySelectorAll(".content .products .cathead span")[1].style.bottom = '5px';
        document.querySelectorAll(".content .products .cathead .grad")[1].style.top = '0px';
    }
    cathead3.onmouseover = () => {
        document.querySelectorAll(".content .products .cathead img")[2].style.transform = 'scale(1.5)';
        document.querySelectorAll(".content .products .cathead span")[2].style.bottom = '-100px';
        document.querySelectorAll(".content .products .cathead .grad")[2].style.top = '250px';
    }
    cathead3.onmouseout = () => {
        document.querySelectorAll(".content .products .cathead img")[2].style.transform = 'scale(1)';
        document.querySelectorAll(".content .products .cathead span")[2].style.bottom = '5px';
        document.querySelectorAll(".content .products .cathead .grad")[2].style.top = '0px';
    }
    var list = document.getElementsByClassName("pl")[0];
    var prodlist = document.getElementsByClassName("pd")[0];
    prodlist.style.display = 'none';
    var mainlist = document.getElementsByClassName('mainlist')[0];
    var descplist = document.getElementsByClassName('prod')[0];
    list.style.display = 'none';
    var listdoc = mainlist.contentDocument;
    var html1 = listdoc.getElementsByTagName("html")[0];
    var descpdoc = descplist.contentDocument;
    var html2 = descpdoc.getElementsByTagName("html")[0];
    var pallete = listdoc.getElementsByClassName("pallete");
    var descppage = descpdoc.getElementsByClassName("descpitem");
    var content = document.getElementsByClassName("content")[0];
    var loginbox = document.getElementsByClassName("loginbox")[0];
    document.getElementById("login").onclick = () => {
        if(content.style.filter == 'blur(0px)'){
            content.style.filter = 'blur(5px)';
            list.style.filter = 'blur(5px)';
            prodlist.style.filter = 'blur(5px)';
            loginbox.style.display = 'flex';
        }
        else{
            content.style.filter = 'blur(0px)';
            list.style.filter = 'blur(0px)';
            prodlist.style.filter = 'blur(0px)';
            loginbox.style.display = 'none';
        }
    }
    var contain1 = document.getElementsByClassName("contain1")[0];
    var contain2 = document.getElementsByClassName("contain2")[0];
    var sign1 = document.getElementsByClassName("sign1")[0];
    var sign2 = document.getElementsByClassName("sign2")[0];
    var containleft;
    sign2.onclick = () => {
        containleft = window.getComputedStyle(contain2).getPropertyValue('left');
        if(containleft == '0px'){
            contain2.style.setProperty('left',`${-400}px`);
            sign1.style.backgroundColor = 'white';
            sign1.style.color = 'black';
            sign1.style.boxShadow = 'none';
            sign2.style.backgroundColor = 'rgb(0, 144, 158)';
            sign2.style.color = 'white';
            sign2.style.boxShadow = '2px 2px 5px rgba(128, 128, 128, 0.336)';
            
        }
    }
    sign1.onclick = () => {
        containleft = window.getComputedStyle(contain2).getPropertyValue('left');
        if(containleft == '-400px'){
            contain2.style.setProperty('left',`${0}px`);
            sign2.style.backgroundColor = 'white';
            sign2.style.color = 'black';
            sign2.style.boxShadow = 'none';
            sign1.style.backgroundColor = 'rgb(0, 144, 158)';
            sign1.style.color = 'white';
            sign1.style.boxShadow = '2px 2px 5px rgba(128, 128, 128, 0.336)';
        }
    }
    var afterlogin = document.querySelectorAll(".nav .mine .afterlogin")[0];
    // afterlogin.style.display = 'none';
    var signout = document.querySelector(".nav .mine .signout");
    signout.style.display = 'none';
    var span = document.querySelector(".afterlogin span");
    var beforelogin = document.querySelector(".nav .mine #login");
    var sub = document.querySelectorAll("button");
    var form1 = document.querySelectorAll(".contain2 form")[0];
    var form2 = document.querySelectorAll(".contain2 form")[1];
    var name,email,password,flag=-1;
    sub[0].onclick = () => {
        name = form1["username1"].value;
        localStorage.setItem("name",name);
        localStorage.setItem("log","1");
        password = form1["password1"].value;
        if(!(name==null || name=="" || password==null || password=="")){
            beforelogin.style.display = 'none';
            afterlogin.style.display = 'flex';
            content.style.filter = 'blur(0px)';
            list.style.filter = 'blur(0px)';
            prodlist.style.filter = 'blur(0px)';
            loginbox.style.display = 'none';
            span.innerText = `HI ${localStorage.getItem("name")}`;
        }
    }
    sub[1].onclick = () => {
        name = form2["username2"].value;
        localStorage.setItem("name",name);
        localStorage.setItem("log","1");
        email = form2["email"].value;
        password = form2["password2"].value;
        if(!(name==null || name=="" || password==null || password=="" || email==null || email=="")){
            beforelogin.style.display = 'none';
            afterlogin.style.display = 'flex';
            content.style.filter = 'blur(0px)';
            list.style.filter = 'blur(0px)';
            prodlist.style.filter = 'blur(0px)';
            loginbox.style.display = 'none';
            span.innerText = `HI ${localStorage.getItem("name")}`;
        }
    }
    if(localStorage.getItem("log")=="1"){
        beforelogin.style.display = 'none';
        afterlogin.style.display = 'flex';
        span.innerText = `HI ${localStorage.getItem("name")}`;
    }
    else{
        beforelogin.style.display = 'flex';
        afterlogin.style.display = 'none';
    }
    afterlogin.onclick = () => {
        if(signout.style.display == 'flex'){
            signout.style.display = 'none';
        }
        else{
            signout.style.display = 'flex';
        }
    }
    signout.onclick = () => {
        localStorage.setItem("log","0");
        localStorage.setItem("name","");
        beforelogin.style.display = 'flex';
        afterlogin.style.display = 'none';
        signout.style.display = 'none';
    }


    cathead1.onclick = () => {
        content.style.display = 'none';
        searchDisplay("GROCERY");
        list.style.display = 'block';
        prodlist.style.display = 'none';
        document.documentElement.style.setProperty('--listheight',`${html1.offsetHeight}px`);
    }
    cathead2.onclick = () => {
        content.style.display = 'none';
        searchDisplay("CLEANING & HOUSEHOLD");
        list.style.display = 'block';
        prodlist.style.display = 'none';
        document.documentElement.style.setProperty('--listheight',`${html1.offsetHeight}px`);
    }
    cathead3.onclick = () => {
        content.style.display = 'none';
        searchDisplay("FRUITS & VEGETABLES");
        list.style.display = 'block';
        prodlist.style.display = 'none';
        document.documentElement.style.setProperty('--listheight',`${html1.offsetHeight}px`);
    }
    var toplink = document.querySelectorAll("header .cat a");
    toplink[0].onclick = () => {
        content.style.display = 'none';
        searchDisplay("GROCERY");
        list.style.display = 'block';
        prodlist.style.display = 'none';
        document.documentElement.style.setProperty('--listheight',`${html1.offsetHeight}px`);
    }
    toplink[1].onclick = () => {
        content.style.display = 'none';
        searchDisplay("CLEANING & HOUSEHOLD");
        list.style.display = 'block';
        prodlist.style.display = 'none';
        document.documentElement.style.setProperty('--listheight',`${html1.offsetHeight}px`);
    }
    toplink[2].onclick = () => {
        content.style.display = 'none';
        searchDisplay("FRUITS & VEGETABLES");
        list.style.display = 'block';
        prodlist.style.display = 'none';
        document.documentElement.style.setProperty('--listheight',`${html1.offsetHeight}px`);
    }
    var searchText = document.querySelector("#search");
    searchText.onkeyup = (key) => {
        if(key.code === "Enter"){
            if(searchText.value == "" || searchText.value == null){
                content.style.display = 'block';
                list.style.display = 'none';
                prodlist.style.display = 'none';
            }
            else{
                content.style.display = 'none';
                searchDisplay(searchText.value.toUpperCase());
                list.style.display = 'block';
                document.documentElement.style.setProperty('--listheight',`${html1.offsetHeight}px`);
            }
        }
    }
    function searchDisplay(text){
        for(i=0 ; i<pallete.length ; i++){
            var itemName = listdoc.getElementsByClassName("name")[i].innerText.toUpperCase();
            if(itemName.indexOf(text) > -1){
                pallete[i].style.display = 'flex';
            }
            else{
                pallete[i].style.display = 'none';
            }
        }
    }
    var prolist = document.getElementsByClassName("prolist");
    prolist[0].addEventListener("click", (e) => {
        searchProdDisplay(e.path.reverse()[8].id);
    }, true);
    prolist[1].addEventListener("click", (e) => {
        searchProdDisplay(e.path.reverse()[8].id);
    }, true);
    prolist[2].addEventListener("click", (e) => {
        searchProdDisplay(e.path.reverse()[8].id);
    }, true);
    var listTodescp = listdoc.getElementsByClassName("list");
    listTodescp[0].addEventListener("click", (e) => {
        searchProdDisplay(e.path.reverse()[5].id);
    }, true);
    
    function searchProdDisplay(text){
        descpdoc.getElementsByClassName("name")[0].innerText = listdoc.getElementById(text).getElementsByClassName("name")[0].innerText;
        descpdoc.querySelector(".cont1 img").src = `../Cat${text[2]}_Product_Photos/${text}.jpg`;
        descpdoc.getElementsByClassName("ratebox")[0].innerText = listdoc.getElementById(text).getElementsByClassName("ratebox")[0].innerText;
        descpdoc.getElementsByClassName("numrate")[0].innerText = listdoc.getElementById(text).getElementsByClassName("numrate")[0].innerText;
        descpdoc.getElementsByClassName("price")[0].innerText = listdoc.getElementById(text).getElementsByClassName("price")[0].innerText;
        descpdoc.getElementsByClassName("oprice")[0].innerText = listdoc.getElementById(text).getElementsByClassName("oprice")[0].innerText;
        descpdoc.getElementsByClassName("discount")[0].innerText = listdoc.getElementById(text).getElementsByClassName("discount")[0].innerText;
        descpdoc.getElementsByClassName("data")[0].innerText = listdoc.getElementById(text).getElementsByClassName("productdesc")[0].innerText;
        descpdoc.getElementsByClassName("seller")[0].innerHTML = listdoc.getElementById(text).getElementsByClassName("seller")[0].innerHTML;
        descpdoc.querySelector(".cont2 img").src = `../Images_icons/c${text[2]}i${Math.floor(Math.random()*4)+1}.jpg`;
        window.scrollTo(0,0);
        prodlist.style.display = 'block';
        content.style.display = 'none';
        list.style.display = 'none';
        document.documentElement.style.setProperty('--listheight',`${html2.offsetHeight}px`);
    }
    document.querySelectorAll(".logo a")[0].onclick = () => {
        content.style.display = 'block';
        list.style.display = 'none';
        prodlist.style.display = 'none';
    }
}

