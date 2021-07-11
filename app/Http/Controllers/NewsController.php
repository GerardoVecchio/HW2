<?php

namespace App\Http\Controllers;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use Session;

class NewsController extends BaseController{

    public function page(){
        if(session('allenatore')!= null){
            return view('news')->with('allenatore',session('allenatore')); 
        }else{
            return view('news')->with('allenatore','');
        }
    }
        
        public function news(){
            $curl = curl_init();

            curl_setopt_array($curl, [
	            CURLOPT_URL => "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=playoff&pageNumber=1&pageSize=5&autoCorrect=true&withThumbnails=true&fromPublishedDate=null&toPublishedDate=null",
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 30,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "GET",
                CURLOPT_HTTPHEADER => [
                    "x-rapidapi-host: contextualwebsearch-websearch-v1.p.rapidapi.com",
                    "x-rapidapi-key: 11f95f18admshecc528c9bdf5f1ep1e59f8jsn19ba48e7e784"
                ],
            ]);

            $response = curl_exec($curl);
            $err = curl_error($curl);

            if ($err) {
                echo "cURL Error #:" . $err;
            } else {
                $json = json_decode($response, true);
                curl_close($curl);
                return $json;
            }
                    
        }

}