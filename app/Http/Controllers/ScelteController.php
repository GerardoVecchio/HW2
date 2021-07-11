<?php
namespace App\Http\Controllers;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Utente;
use App\Models\Squadra;
use App\Models\Giocatore;
use DB;
use Session;

class ScelteController extends BaseController{
    public function checkLog(){
        if(session('allenatore')== null){
            return redirect('login');
        }else{
            return view('scelte')->with('error','')->with('allenatore',session('allenatore'))->with('csrf_token',csrf_token());
        }
    }

    public function squadre(){
        $squadre=Squadra::select('nome','imgSquadra','fondazione')->whereNull('allenatore')->whereNotNull('imgSquadra')->whereNotNull('fondazione')->get();
        return $squadre;
    }

    public function giocatori(){
        $giocatori=Giocatore::select('ssn','nome','cognome','imgGiocatore')->whereNull('squadraN')->whereNotNull('imgGiocatore')->get();
        return $giocatori;
    }

    public function assegna(){
        $error='';
        $alle= session('allenatore');
        $sq= request('squadraUtente');
        $dones=Squadra::where('allenatore',$alle)->first();
        if(!empty($dones)){
            $error.='Possiedi già una squadra';
        }else{
        DB::select("call assegnaSquadra('$alle','$sq')"); 

        $gioc0=request('0');
        $gioc1=request('1');
        $gioc2=request('2');
        $gioc3=request('3');
        $gioc4=request('4');

        $doneg=DB::select("call assegnaGiocatori('$gioc0','$gioc1','$gioc2','$gioc3','$gioc4','$sq')");
        $error.='Hai scelto con successo la tua squadra';
        }
        
        return view('scelte')->with('error',$error)->with('allenatore',session('allenatore'))->with('csrf_token',csrf_token());
    }
}