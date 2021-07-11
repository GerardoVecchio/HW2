<?php

namespace App\Http\Controllers;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Utente;
use App\Models\TabellaGiocatori;
use App\Models\Partite;
use Session;

class HomeController extends BaseController{
    public function checkLog(){
        if(session('allenatore')!= null){
            return view('home')->with('allenatore',session('allenatore')); 
        }else{
            return view('home')->with('allenatore','');
        }
    }

    public function tabellaGiocatori(){
        $giocatori=TabellaGiocatori::orderBy('mediaPti','desc')->limit(10)->get();
        return $giocatori;
    }

    public function tabellaPartite(){
        $partite=Partite::whereNotNull('risultatoCasa')->whereNotNull('risultatoTrasferta')->orderBy('giornoP','desc')->limit(10)->get();
        return $partite;
    }
}