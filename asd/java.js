const follow={
    numer: document.getElementById("numer"),
    przy: document.getElementById("przy"),

    btn1:function(){
        this.numer.innerHTML=parseInt(this.numer.innerHTML)+1;
    },

    init:function(){
        this.przy.addEventListener('click',this.btn1.bind(follow));
    },
}
follow.init();