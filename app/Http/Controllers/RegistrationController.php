<?php

namespace App\Http\Controllers;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Utente;
use Session;

class RegistrationController extends BaseController{
    
    public function checkRegistration(){
        if(session('allenatore') !=null){
            return redirect('home');
        }else{
            return view('registration')->with('error','')->with('allenatore','')->with('csrf_token',csrf_token());
        }
    }

    public function registration(){
        $request= request();
        $error='';
        $ckAll= Utente::where('userName',$request->username)->orWhere('email',$request->Email)->get();
        if(count($ckAll)>0){
            $error .= 'Credenziali già in uso.';
        }else{
            if(strlen($request->Password)<8){
                $error.='La password deve contenere 8 caratteri.';
            }
            if(empty($request->c_pass)){
                $error .= 'Immettere password di conferma.';
            }
            if($request->Password != $request->c_pass){
                $error .= 'Le password non coincidono, impossibile proseguire.';
            }
            if(empty($request->username)||empty($request->Email)||empty($request->Password)||empty($request->c_pass)){
                $error.='Si prega di inserire tutti i campi prima di procedere.';
            }
            if(empty($error)){
                $allenatore=Utente::create([
                    'userName'=>$request->username,
                    'password'=>md5($request->Password),
                    'email'=>$request->Email,
                ]);
                if($allenatore){
                    $error.='Account creato con successo.';
                }else{
                    $error.='Impossibile creare un account.';
                }
                
            }
        }
        return view('registration')->with('error',$error)->with('allenatore','')->with('csrf_token',csrf_token());
    }
}