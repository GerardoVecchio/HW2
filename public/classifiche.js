document.addEventListener('DOMContentLoaded',function(){
    fetch('classifiche/pti').then(onResponse).then(tab_pti);
    fetch('classifiche/ass').then(onResponse).then(tab_ass); 
    fetch('classifiche/rim').then(onResponse).then(tab_rim); 
},false);

function onResponse(response){
    return response.json();
}

function tab_pti(json){
    let boxa=document.getElementById("boxa");

    let table = document.createElement('table');
    table.className='table';
    table.id='table';
    let riga= document.createElement('tr');

    let nome = document.createElement('th');
    nome.innerText='Nome';
    riga.appendChild(nome);

    let cognome = document.createElement('th');
    cognome.innerText='Cognome';
    riga.appendChild(cognome);

    let squadra = document.createElement('th');
    squadra.innerText='Squadra';
    riga.appendChild(squadra);

    let punti = document.createElement('th');
    punti.innerText='Media Punti';
    riga.appendChild(punti);

    table.appendChild(riga);

    for (let i=0;i<json.length;i++){

        let tr=document.createElement('tr');
        
        let tdn=document.createElement('td');
        tdn.innerText = json[i].nome;
        tr.appendChild(tdn);

        let tdc=document.createElement('td');
        tdc.innerText = json[i].cognome;
        tr.appendChild(tdc);

        let tds=document.createElement('td');
        tds.innerText = json[i].squadraN;
        tr.appendChild(tds);

        let tdp=document.createElement('td');
        tdp.innerText = json[i].mediaPti;
        tr.appendChild(tdp);

        table.appendChild(tr);
    }
    boxa.appendChild(table);
}

function tab_ass(json){

    let boxa=document.getElementById("boxb");

    let table = document.createElement('table');
    table.className='table';
    table.id='table';
    let riga= document.createElement('tr');

    let nome = document.createElement('th');
    nome.innerText='Nome';
    riga.appendChild(nome);

    let cognome = document.createElement('th');
    cognome.innerText='Cognome';
    riga.appendChild(cognome);

    let squadra = document.createElement('th');
    squadra.innerText='Squadra';
    riga.appendChild(squadra);

    let assist = document.createElement('th');
    assist.innerText='Media Assist';
    riga.appendChild(assist);

    table.appendChild(riga);

    for (let i=0;i<json.length;i++){

        let tr=document.createElement('tr');
        
        let tdn=document.createElement('td');
        tdn.innerText = json[i].nome;
        tr.appendChild(tdn);

        let tdc=document.createElement('td');
        tdc.innerText = json[i].cognome;
        tr.appendChild(tdc);

        let tds=document.createElement('td');
        tds.innerText = json[i].squadraN;
        tr.appendChild(tds);

        let tda=document.createElement('td');
        tda.innerText = json[i].mediaAss;
        tr.appendChild(tda);

        table.appendChild(tr);
    }
    boxa.appendChild(table);
}

function tab_rim(json){
    let boxa=document.getElementById("boxc");

    let table = document.createElement('table');
    table.className='table';
    table.id='table';
    let riga= document.createElement('tr');

    let nome = document.createElement('th');
    nome.innerText='Nome';
    riga.appendChild(nome);

    let cognome = document.createElement('th');
    cognome.innerText='Cognome';
    riga.appendChild(cognome);

    let squadra = document.createElement('th');
    squadra.innerText='Squadra';
    riga.appendChild(squadra);

    let rimbalzi = document.createElement('th');
    rimbalzi.innerText='Media Rimbalzi';
    riga.appendChild(rimbalzi);

    table.appendChild(riga);

    for (let i=0;i<json.length;i++){

        let tr=document.createElement('tr');
        
        let tdn=document.createElement('td');
        tdn.innerText = json[i].nome;
        tr.appendChild(tdn);

        let tdc=document.createElement('td');
        tdc.innerText = json[i].cognome;
        tr.appendChild(tdc);

        let tds=document.createElement('td');
        tds.innerText = json[i].squadraN;
        tr.appendChild(tds);

        let tdr=document.createElement('td');
        tdr.innerText = json[i].mediaRim;
        tr.appendChild(tdr);

        table.appendChild(tr);
    }
    boxa.appendChild(table);}