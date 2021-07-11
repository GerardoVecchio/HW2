<?php

namespace App\Http\Controllers;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Utente;
use DB;
use Session;

class ProfileController extends BaseController{
    public function checkLog(){
        if(session('allenatore')!= null){
            return view('profile')->with('error','')->with('allenatore',session('allenatore'))->with('csrf_token',csrf_token());
        }else{
            return redirect('login');
        }
    }

    public function scambiProposti(){
        $alle=session('allenatore');
        $done=DB::select("call scambiProposti('$alle')");
        
        return $done;
    }

    public function scambiCheTiHannoProposto(){
        $alle=session('allenatore');
        $done=DB::select("call scambiCheTiHannoProposto('$alle')");

        return $done;
    }

    public function accetta(){
        $chiave=request('chiave');
        $done=DB::select("call updateGestioneScambi('$chiave')");
        return redirect('profile');
    }

    public function rifiuta(){
        $chiave=request('chiave');
        $done=DB::select("call rifiutaScambio('$chiave')");
        return redirect('profile');
    }

    
}