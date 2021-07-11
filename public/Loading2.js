var nomeG = new Array;
var cognomeG = new Array;
var giocatoriInterni=new Array;
let fetches = new Array;
let ppg = new Array;
let rpg = new Array;
let apg = new Array;

document.addEventListener('DOMContentLoaded',function(){
    fetch('scelte/sq').then(onResponse).then(creaSquadre);
    let giocatori=fetch('scelte/gi').then(onResponse).then(creaGiocatori);
    Promise.resolve(giocatori).then(prendiGiocatori);

   
},false);

function onResponse(response){
    return response.json();
}

function creaSquadre(json){

    let nSquadre = json.length;
    let TeamGrid = document.getElementById('team-grid');

    for(let i=0; i<nSquadre;i++){
        let div= document.createElement('div');
        div.className='squadra';
        div.id='squadra'+ i;

        let nome= document.createElement('div');
            nome.className='nome';

            let h1 = document.createElement('h1');
            h1.id='h1' +i;
            h1.textContent= json[i].nome;
            nome.appendChild(h1);
            
            let buttonimg = document.createElement('img');
                buttonimg.id='icon';
                buttonimg.setAttribute('onclick', 'aggiungiaScelte('+i+')');
                buttonimg.src='add-icon.png';
                nome.appendChild(buttonimg);
                div.appendChild(nome);
                
            let img=document.createElement('img');
                img.id = 'img'+i;
                img.setAttribute('onclick', 'mostraDescrizione('+i+')');
                img.src=json[i].imgSquadra;
                div.appendChild(img);
                
            let descr = document.createElement('div');
                descr.className='descrizioneS';
                descr.id='iddescrizioneS' +i;
                descr.textContent = json[i].fondazione;
                div.appendChild(descr);
                TeamGrid.appendChild(div);
    }
}

function creaGiocatori(json){
    for(let j=0;j<json.length;j++){

        let Ggrid= document.getElementById('player-grid'); 

        let divG= document.createElement('div');
        divG.className='giocatore';
        divG.id='giocatore' +j;
        
        let nome= document.createElement('div');
        nome.className ='nome';


        let h1=document.createElement('h1');
            h1.id='h1G' +j;
            h1.textContent=json[j].cognome+', '+json[j].nome;
            cognomeG.push(json[j].cognome);
            nomeG.push(json[j].nome);
            nome.appendChild(h1);

        let buttonimg=document.createElement('img');
            buttonimg.id='icon';
            buttonimg.setAttribute('onclick','aggiungiGiocatore('+j+')');
            buttonimg.src='add-icon.png';
            nome.appendChild(buttonimg);
            divG.appendChild(nome);
        
        let img=document.createElement('img');
            img.id = 'imgG'+j;
            img.setAttribute('onclick', 'showDescr('+j+')');
            img.src=json[j].imgGiocatore;
            divG.appendChild(img);
        Ggrid.appendChild(divG);
        
        let descr=document.createElement('div');
        descr.className='descrizioneG';
        descr.id='iddescrizioneG' +j;
        divG.appendChild(descr);
        
        let ssnG=document.createElement('div');
            ssnG.id='ssnG'+j;
            ssnG.textContent=+json[j].ssn;
            descr.appendChild(ssnG);
    }  

}

function prendiGiocatori(){
    rest_url_players = 'http://data.nba.net/10s/prod/v1/2020/players.json';
    var F=fetch(rest_url_players).then(onResponse).then(cercaGiocatori);
    Promise.resolve(F).then(importaStat);
}

function cercaGiocatori(json){
    let count=Object.keys(json.league.standard).length;

    for( let j =0; j<nomeG.length; j++){
        var completo = cognomeG[j]+', '+nomeG[j];
            for(let i = 0; i<count; i++ ){               
                var str = json.league.standard[i].temporaryDisplayName;
                if(completo === str){
                    giocatoriInterni.push(json.league.standard[i]);
                    console.log(str);
                    console.log(giocatoriInterni[j]);
                }
            }
    }
}

function importaStat(){
    var req=[];

        for(let k =0; k<giocatoriInterni.length; k++){
            var playerId = giocatoriInterni[k].personId;

            rest_url = 'http://data.nba.net/prod/v1/2020/players/'+playerId+'_profile.json';
            req.push(rest_url);            
        }
        for(let l=0; l<req.length; l++){
        fetches.push(fetch(req[l]).then(onResponse));
    }    
    var X=Promise.all(fetches).then(caricaDati);
    Promise.resolve(X).then(creaDescrizioni);
}

function caricaDati(){
    for(let m=0 ; m<fetches.length; m++){
        fetches[m].then((value)=> {
            ppg.push(value.league.standard.stats.careerSummary.ppg);
            rpg.push(value.league.standard.stats.careerSummary.rpg);
            apg.push(value.league.standard.stats.careerSummary.apg);
        });
    }
}

function creaDescrizioni(){
    for(let k=0;k<giocatoriInterni.length;k++){
        let gioc = document.getElementById('iddescrizioneG' +k);
        let stat = document.createElement('ul');
        let pti= document.createElement('li');
        pti.textContent= 'Punti :  '+ppg[k];
        stat.appendChild(pti);
        let ass= document.createElement('li');
        ass.textContent= 'Assist:  '+apg[k];
        stat.appendChild(ass);
        let rimb= document.createElement('li');
        rimb.textContent= 'Rimbalzi:  '+rpg[k];
        stat.appendChild(rimb);
        gioc.appendChild(stat);
    }
}