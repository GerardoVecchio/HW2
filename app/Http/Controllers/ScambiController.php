<?php

namespace App\Http\Controllers;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Utente;
use App\Models\Giocatore;
use DB;
use Session;

class ScambiController extends BaseController{
    public function checkLog(){
        if(session('allenatore')!= null){
            return view('scambi')->with('error','')->with('allenatore',session('allenatore'))->with('csrf_token',csrf_token());
        }else{
            return redirect('login');
        }
    }

    public function yourplayer(){
        $alle=session('allenatore');
        $done=DB::select("call yourPlayer('$alle')");
        return $done;
    }

    public function allplayer(){
        $alle=session('allenatore');
        $done=DB::select("call allPlayer('$alle')");
        return $done;
    }

    public function proponi(){
        $error='';
        $alle= session('allenatore');

        $gio1=request('ssn1');
        $gio2=request('ssn2');
        $done=DB::select("call inserisciGestioneScambi('$gio1','$gio2')");

        return view('scambi')->with('error',$error)->with('allenatore',session('allenatore'))->with('csrf_token',csrf_token());
    }
}