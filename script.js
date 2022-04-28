
pn = 150

function increasePn() {
    if ( pn < 160) {
        pn = pn + 15
    }else{
       pn = pn - 37
    }
}


x = document.createElement("img")
x.className = "transi1"

function transi1() {
    increasePn();
    document.body.appendChild(x);
    setTimeout(function(){transi1Reset()}, 8550);
}

function transi1Reset() {
    document.body.removeChild(x);
    x.setAttribute("src", `https://picsum.photos/50/${(pn + 1)}`);
    transi1();
    
}


y = document.createElement("img")
y.className = "transi2"

function transi2() {
    increasePn();
    document.body.appendChild(y);
    setTimeout(function(){transi2Reset()}, 9000);
}

function transi2Reset() {
    document.body.removeChild(y);
    y.setAttribute("src", `https://picsum.photos/50/${(pn + 9)}`);
    transi2();
}



z = document.createElement("img")
z.className = "transi3"

function transi3() {
    increasePn();
    document.body.appendChild(z);
    setTimeout(function(){transi3Reset()}, 6500);
}

function transi3Reset() {
    document.body.removeChild(z);
    z.setAttribute("src", `https://picsum.photos/48/${(pn + 7)}`);
    transi3();
}



w = document.createElement("img")
w.className = "transi4"

function transi4() {
    increasePn();
    document.body.appendChild(w);
    setTimeout(function(){transi4Reset()}, 7500);
}

function transi4Reset() {
    document.body.removeChild(w);
    w.setAttribute("src", `https://picsum.photos/50/${(pn + 3)}`);
    transi4();
}



i = document.createElement("img")
i.className = "transi5"

function transi5() {
    increasePn();
    document.body.appendChild(i);
    setTimeout(function(){transi5Reset()}, 7000);
    
}

function transi5Reset() {
    document.body.removeChild(i);
    i.setAttribute("src", `https://picsum.photos/48/${pn}`);
    transi5();
}



u = document.createElement("img")
u.className = "transi6"
function transi6() {
    increasePn();
    document.body.appendChild(u);
    setTimeout(function(){transi6Reset()}, 6000);
    
}

function transi6Reset() {
    document.body.removeChild(u);
    u.setAttribute("src", `https://picsum.photos/50/${(pn + 2)}`);
    transi6();
}



m = document.createElement("img")
m.className = "transi7"

function transi7() {
    increasePn();
    document.body.appendChild(m);
    setTimeout(function(){transi7Reset()}, 9000);
}

function transi7Reset() {
    document.body.removeChild(m);
    m.setAttribute("src", `https://picsum.photos/48/${(pn + 11)}`);
    transi7();
}


t = document.createElement("img")
t.className = "transi8"

function transi8() {
    increasePn();
    document.body.appendChild(t);
    setTimeout(function(){transi8Reset()}, 8000);
}

function transi8Reset() {
    document.body.removeChild(t);
    t.setAttribute("src", `https://picsum.photos/48/${(pn + 1)}`);
    transi8();
}

a = document.createElement("img")
a.className = "transi9"

function transi9() {
    increasePn();
    document.body.appendChild(a);
    setTimeout(function(){transi9Reset()}, 4500);
}

function transi9Reset() {
    document.body.removeChild(a);
    a.setAttribute("src", `https://picsum.photos/48/${(pn + 7)}`);
    transi9();
}

n = document.createElement("img")
n.className = "transi10"

function transi10() {
    increasePn();
    document.body.appendChild(n);
    setTimeout(function(){transi10Reset()}, 7000);
}

function transi10Reset() {
    document.body.removeChild(n);
    n.setAttribute("src", `https://picsum.photos/48/${(pn + 1)}`);
    transi10();
}




function startTransi() {
    setTimeout(function(){transi1()}, 0);
    setTimeout(function(){transi2()}, 0);
    setTimeout(function(){transi3()}, 0);
    setTimeout(function(){transi4()}, 0);
    setTimeout(function(){transi5()}, 0);
    setTimeout(function(){transi6()}, 0);
    setTimeout(function(){transi7()}, 0);
    setTimeout(function(){transi8()}, 0);
    setTimeout(function(){transi9()}, 0);
    setTimeout(function(){transi10()}, 0);
}

startTransi()

const q = document.querySelector('#button1');

q.onclick = (e) => {
    window.scrollTo({
        top: 1300,
        behavior: 'smooth'
    });

}

const q2 = document.querySelector('#button2')

q2.onclick = (e) => {
    window.scrollTo({
        top: 1300,
        behavior: 'smooth'
    });

}


