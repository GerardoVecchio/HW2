<?php

namespace App\Http\Controllers;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use DB;
use Session;

class ClassificheController extends BaseController{
    public function checkLog(){
        if(session('allenatore')== null){
            return view('classifiche')->with('error','')->with('allenatore','')->with('csrf_token',csrf_token());
        }else{
            return view('classifiche')->with('error','')->with('allenatore',session('allenatore'))->with('csrf_token',csrf_token());
        }
    }

    public function pti(){
        $pti=DB::select('call classificaPTI()');
        return $pti;
    }

    public function ass(){
        $ass=DB::select('call classificaASS()');
        return $ass;
    }

    public function rim(){
        $rim= DB::select('call classificaRIM()');
        return $rim;
    }
}