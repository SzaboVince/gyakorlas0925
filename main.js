import './style.css'

document.addEventListener("DOMContentLoaded", init);

function init(){
    const szamitGomb=document.getElementById("szamit");
    szamitGomb.addEventListener("click",teruletkerulet);
}

function teruletkerulet(){
    const a=parseFloat(document.getElementById("aOldal").value)
    const b=parseFloat(document.getElementById("bOldal").value)
    const c=parseFloat(document.getElementById("cOldal").value)
    const eredmeny=document.getElementById("eredmeny")
    if(a+b<=c||a+c<=b||b+c<=a){
        eredmeny.textContent="Ilyen háromszög nem létezik."
    }
    else{
        const haromszog={
            a:a,
            b:b,
            c:c,
            kerulet: function(){
                return this.a+this.b+this.c;
            },
            terulet: function(){
                const s=this.kerulet()/2
                return Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c))
            },
            keruletesterulet:function(){
                return `Kerület: ${this.kerulet()} cm - Terület: ${this.terulet()} cm2`
            }
        }
        console.log(haromszog)
        eredmeny.textContent=haromszog.keruletesterulet();
    }
}