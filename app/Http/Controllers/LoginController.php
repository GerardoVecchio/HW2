<?php

namespace App\Http\Controllers;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Utente;
use Session;

class LoginController extends BaseController{
    public function checkLog(){
        if(session('allenatore')!= null){
            return redirect('home');
        }else{
            return view('login')->with('error','')->with('allenatore','')->with('csrf_token',csrf_token());
        }
    }

    public function logga(){
        $error='';
        if(empty(request('password'))|| empty(request('username'))){
            $error.='Campi non compilati correttamente';
        }
        if(empty($error)){
            $find=Utente::where('userName',request('username'))->where('password',md5(request('password')))->first();
            if(!isset($find)){
                $error.='Username o password non valide';
            }else{
                Session::put('allenatore',$find->userName);
                return redirect('home');
            }
            return view('login')->with('error',$error)->with('allenatore','')->with('csrf_token',csrf_token());
        }
    }

    public function slogga(){
        Session::flush();
        return redirect('home');
    }
}