const follow={
    numer: document.getElementById("numer"),
    przy: document.getElementById("przy"),
    przy1: document.getElementById("przy1"),

    btn1:function(){
        this.numer.innerHTML=parseInt(this.numer.innerHTML)+1;
    },

    
    btn2:function(){
        if (this.numer.innerHTML > 0) this.numer.innerHTML=parseInt(this.numer.innerHTML)-1;
    },

    init:function(){
        this.przy.addEventListener('click',this.btn1.bind(follow));
        this.przy1.addEventListener('click',this.btn2.bind(follow));
    },
}
follow.init();