<?php

namespace App\Http\Controllers;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Utente;
use App\Models\Squadra;
use DB;
use Session;

class PartiteController extends BaseController{
    public function checkLog(){
        if(session('allenatore')!= null){
            return view('partite')->with('error','')->with('allenatore',session('allenatore'))->with('csrf_token',csrf_token());
        }else{
            return redirect('login');
        }
    }

    public function allSquad(){
        $all=session('allenatore');
        $done=Squadra::where('allenatore','!=',$all)->get();
        return $done;
    }

    public function richiestePartite(){
        $alle=session('allenatore');
        $done=DB::select("call partiteProposte('$alle')");
        return $done;
    }

    public function richiesta(){
        $all=session('allenatore');
        $sq2=request('ssn2');
        DB::select("call inserisciGestionePartite('$all','$sq2')");
        return redirect('partite');
    }

    public function accetta(){
        $chiave=request('chiave');
        $done=DB::select("call updateGestionePartite('$chiave')");
        return redirect('partite');
    }

    public function rifiuta(){
        $chiave=request('chiave');
        $done=DB::select("call rifiutaGestionePartite('$chiave')");
        return redirect('partite');
    }
}