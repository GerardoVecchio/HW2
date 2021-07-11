document.addEventListener('DOMContentLoaded',function(){
    fetch('home/tab').then(onResponse).then(tabellaGiocatori);
    fetch('home/tab2').then(onResponse).then(tabellaSquadre);

   
},false);

function onResponse(response){
    return response.json();
}

function tabellaGiocatori(json){
    let boxa= document.getElementById("boxa");
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
    punti.innerText='Punti';
    riga.appendChild(punti);

    let assist = document.createElement('th');
    assist.innerText='Assist';
    riga.appendChild(assist);

    let rimbalzi = document.createElement('th');
    rimbalzi.innerText='Rimbalzi';
    riga.appendChild(rimbalzi);

    let giocate = document.createElement('th');
    giocate.innerText='Giocate';
    riga.appendChild(giocate);
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

        let tda=document.createElement('td');
        tda.innerText = json[i].mediaAss;
        tr.appendChild(tda);

        let tdr=document.createElement('td');
        tdr.innerText = json[i].mediaRim;
        tr.appendChild(tdr);

        let tdg=document.createElement('td');
        tdg.innerText = json[i].giocate;
        tr.appendChild(tdg);

        table.appendChild(tr);
    }
    boxa.appendChild(table);
}

function tabellaSquadre(json){
    console.log(json);
    let boxb= document.getElementById('boxb');
    let table = document.createElement('table');
    table.className='table';
    table.id='table';
    let riga= document.createElement('tr');

    let giorno = document.createElement('th');
    giorno.innerText='Giorno';
    riga.appendChild(giorno);

    let squadraC = document.createElement('th');
    squadraC.innerText='Squadra Casa';
    riga.appendChild(squadraC);

    let squadraT = document.createElement('th');
    squadraT.innerText='Squadra Trasferta';
    riga.appendChild(squadraT);

    let risC = document.createElement('th');
    risC.innerText='Risultato Casa';
    riga.appendChild(risC);

    let risT = document.createElement('th');
    risT.innerText='Risultato Trasferta';
    riga.appendChild(risT);

    table.appendChild(riga);


    for (let i=0;i<json.length;i++){
        let tr=document.createElement('tr');
        
        let data=document.createElement('td');
        data.innerText = json[i].giornoP;
        tr.appendChild(data);

        let casa=document.createElement('td');
        casa.innerText = json[i].squadraCasa;
        tr.appendChild(casa);

        let trasf=document.createElement('td');
        trasf.innerText = json[i].squadraTrasferta;
        tr.appendChild(trasf);

        let risC=document.createElement('td');
        risC.innerText = json[i].risultatoCasa;
        tr.appendChild(risC);

        let risT=document.createElement('td');
        risT.innerText = json[i].risultatoTrasferta;
        tr.appendChild(risT);


        table.appendChild(tr);
    }
    boxb.appendChild(table);
}