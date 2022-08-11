var tbody = document.getElementById('tbody')
let linhas = 0
var corpo = document.getElementById('corpo')



function adcAluno(){
   
    let nome = document.getElementById('anome')
let cnome= String(nome.value.split(" ").join("-"))

    if(nome.value.length == 0){
        alert('Digite o nome do aluno')
    }else{
         linhas++
        var  tr = document.createElement('tr')
        tbody.appendChild(tr)
        tr.setAttribute('class', `${cnome}` )
        var th = document.createElement('th')
        th.setAttribute('scope','row') 
        tr.appendChild(th)
        let tnome = document.createTextNode(nome.value)
        th.appendChild(tnome)
        let button = document.createElement('button')
        th.appendChild( button)
        button.innerHTML= "<img src='imgs/lixeira.png'>"
        button.setAttribute('onclick',`buttonExcluir('${cnome}')`)
        for(let d =1 ;d <= 18; d++ ) {
            let td = document.createElement('td')
            tr.appendChild(td)
            td.setAttribute('class', `c${d}`)
            if(d ==1 || d ==2 || d ==4 || d ==5 || d ==7 || d ==9 || d ==10 || d ==12 || d ==13 || d ==15 || d==17 ){
                let input = document.createElement('input')
                td.appendChild(input)
                input.setAttribute('type','number')
                input.setAttribute('class', `n${d}`)
                input.setAttribute('min', `0`)
                input.setAttribute('max', `10`)
                input.setAttribute('step', `0.25`)
                input.setAttribute('onclick', `calcu('${cnome}')`)
            }
       
            
        }
    }

nome.value=''

}
function exclutr(e) {
    if(e != undefined){
      let trAluno = document.querySelector(`tr.${e}`)
    trAluno.remove()
    linhas--
    container.remove()   
    }
    container.remove()   

   
}



let container = document.createElement('div')
function buttonExcluir(c){


    corpo.appendChild(container)
    container.setAttribute('class','container')
    let popup =document.createElement('div')
    container.appendChild(popup)
    popup.setAttribute('class','popup')
    popup.innerHTML="<p>Deseja realmente excluir estas linhas?</p>"
    let buttonSim = document.createElement('button')
    popup.appendChild(buttonSim)
    buttonSim.innerHTML='SIm'
    buttonSim.setAttribute('onclick' , `exclutr('${c}')`)
    let buttonNão = document.createElement('button')
    popup.appendChild(buttonNão)
    buttonNão.setAttribute('onclick',`exclutr()`)
    buttonNão.innerHTML='NÂO'
    

}

function calcu(a){
        
// vars do semestre1

        let media1bi = document.querySelector(`tr.${a} > td.c3`)
        let nota1 = document.querySelector(`tr.${a} input.n1`)
        let nota2 = document.querySelector(`tr.${a} input.n2`) 
        media1bi.innerHTML=((Number(nota1.value) + Number(nota2.value)) /2).toFixed(2)
        let media2bi = document.querySelector(`tr.${a} > td.c6`)
        let nota3 = document.querySelector(`tr.${a} input.n4`)
        let nota4 = document.querySelector(`tr.${a} input.n5`)
        media2bi.innerHTML=((Number(nota3.value) + Number(nota4.value)) /2).toFixed(2) 
        let media1sem = document.querySelector(`tr.${a} > td.c8`)
        let recup1 = document.querySelector(`tr.${a} input.n7`) 
        var res1sem = 0
// vars do semestre2

        let media3bi = document.querySelector(`tr.${a} > td.c11`)
        let nota5 = document.querySelector(`tr.${a} input.n9`)
        let nota6 = document.querySelector(`tr.${a} input.n10`) 
        media3bi.innerHTML=((Number(nota5.value) + Number(nota6.value)) /2).toFixed(2)
        let media4bi = document.querySelector(`tr.${a} > td.c14`)
        let nota7 = document.querySelector(`tr.${a} input.n12`)
        let nota8 = document.querySelector(`tr.${a} input.n13`)
        media4bi.innerHTML=((Number(nota7.value) + Number(nota8.value)) /2).toFixed(2) 
        let media2sem = document.querySelector(`tr.${a} > td.c16`)
        let recup2 = document.querySelector(`tr.${a} input.n15`)
        var res2sem =""

// vars da media final
        let recupfinal = document.querySelector(`tr.${a} input.n17`)
        let mediatotal = document.querySelector(`tr.${a} > td.c18`)
    
        if((Number(nota1.value) + Number(nota2.value) +Number(nota3.value) + Number(nota4.value)) /4 < 6){
                if(Number(recup1.value) > (Number(nota1.value) + Number(nota2.value))/2 || Number(recup1.value) >  (Number(nota3.value) + Number(nota4.value))/2  ){
                        if((Number(nota1.value) + Number(nota2.value)) >= (Number(nota3.value) + Number(nota4.value)) ){
                    media1sem.innerHTML=((Number(recup1.value) + (Number(nota1.value)+Number(nota2.value))/2)/2).toFixed(2)
                    recup1.style.display='inline-block'
                        res1sem =  media1sem.innerHTML=(Number(recup1.value) + (Number(nota1.value)+Number(nota2.value))/2)/2

                    }else{
                    media1sem.innerHTML=((Number(recup1.value) + (Number(nota3.value)+Number(nota4.value))/2)/2).toFixed(2)        }
                    recup1.style.display='inline-block'
                        res1sem =  (Number(recup1.value) + (Number(nota3.value)+Number(nota4.value))/2)/2

                }else{
                    media1sem.innerHTML=((Number(nota1.value) + Number(nota2.value) +Number(nota3.value) + Number(nota4.value)) /4).toFixed(2)
                    recup1.style.display='inline-block'
                        res1sem =  (Number(nota1.value) + Number(nota2.value) +Number(nota3.value) + Number(nota4.value)) /4

                }
            
    }else{
        media1sem.innerHTML=((Number(nota1.value) + Number(nota2.value) +Number(nota3.value) + Number(nota4.value)) /4).toFixed(2)
    recup1.style.display='none'
    res1sem =(Number(nota1.value) + Number(nota2.value) +Number(nota3.value) + Number(nota4.value)) /4} 

if((Number(nota5.value) + Number(nota6.value) +Number(nota7.value) + Number(nota8.value)) /4 < 6){
    if(Number(recup2.value) > (Number(nota5.value) + Number(nota6.value))/2 || Number(recup2.value) >  (Number(nota7.value) + Number(nota8.value))/2  ){
    if((Number(nota5.value) + Number(nota6.value)) >= (Number(nota7.value) + Number(nota8.value)) ){
   media2sem.innerHTML=((Number(recup2.value) + (Number(nota5.value)+Number(nota6.value))/2)/2).toFixed(2)
   recup2.style.display='inline-block'
        res2sem = (Number(recup2.value) + (Number(nota5.value)+Number(nota6.value))/2)/2

}else{
    media2sem.innerHTML=((Number(recup2.value) + (Number(nota7.value)+Number(nota8.value))/2)/2).toFixed(2)     
    recup2.style.display='inline-block'
    res2sem=(Number(recup2.value) + (Number(nota7.value)+Number(nota8.value))/2)/2 
}

}else{
    media2sem.innerHTML=((Number(nota5.value) + Number(nota6.value) +Number(nota7.value) + Number(nota8.value)) /4).toFixed(2)
    recup2.style.display='inline-block'
        res2sem=(Number(nota5.value) + Number(nota6.value) +Number(nota7.value) + Number(nota8.value)) /4
}
    
}else{

    media2sem.innerHTML=((Number(nota5.value) + Number(nota6.value) +Number(nota7.value) + Number(nota8.value)) /4).toFixed(2)
            recup2.style.display='none'
            res2sem = (Number(nota5.value) + Number(nota6.value) +Number(nota7.value) + Number(nota8.value)) /4

} 

    if((Number(res2sem) + Number(res1sem) )/2 < 6 && recupfinal.value > (Number(res2sem) + Number(res1sem) )/2 ){
            mediatotal.innerHTML=( ((((res2sem + res1sem )/2) + Number(recupfinal.value))) /2).toFixed(2)
                

    }else{
        mediatotal.innerHTML= ((res2sem + res1sem )/2).toFixed(2)
    }
}

