
document.addEventListener('DOMContentLoaded',function(){
    fetch('news/data').then(onResponse).then(caricaNotizie);
}, false);

function onResponse(response){
    console.log(response);
    return response.json();
    
}

function caricaNotizie(json){
    console.log(json);
    let sect=document.getElementById('dadN');  
    for(let i=0; i<5; i++){
        let notizia =document.createElement('div');
        notizia.className="notizia";
        notizia.id = "notizia" +i;
            var h1= document.createElement('h1');
            h1.textContent = json.value[i].title;
            notizia.appendChild(h1);

            var img= document.createElement('img');
            img.src= json.value[i].image.url;
            notizia.appendChild(img);
            
            var form= document.createElement('form');
            form.method= "get";
            form.action=json.value[i].url;

            var bttn = document.createElement('button');
            bttn.type="submit";
            bttn.textContent="clicca per leggere la notizia";
            
            form.appendChild(bttn);
            notizia.appendChild(form);

        sect.appendChild(notizia);
    }
}