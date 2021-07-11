<?php

use Illuminate\Support\Facades\Route;
use App\Models\Utente;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('home');
});

Route::get('home','HomeController@checkLog');
Route::get('home/tab','HomeController@tabellaGiocatori');
Route::get('home/tab2','HomeController@tabellaPartite');

Route::get('login','LoginController@checkLog');
Route::post('login','LoginController@logga');
Route::get('logout','LoginController@slogga');

Route::get('registration','RegistrationController@checkRegistration');
Route::post('registration','RegistrationController@registration');

Route::get('scelte','ScelteController@checkLog');
Route::get('scelte/sq','ScelteController@squadre');
Route::get('scelte/gi','ScelteController@giocatori');
Route::post('scelte','ScelteController@assegna');

Route::get('classifiche','ClassificheController@checkLog');
Route::get('classifiche/pti','ClassificheController@pti');
Route::get('classifiche/ass','ClassificheController@ass');
Route::get('classifiche/rim','ClassificheController@rim');

Route::get('profile','ProfileController@checkLog');
Route::get('profile/scambiProposti','ProfileController@scambiProposti');
Route::get('profile/scambiCheTiHannoProposto','ProfileController@scambiCheTiHannoProposto');
Route::post('profile/accetta','ProfileController@accetta');
Route::post('profile/rifiuta','ProfileController@rifiuta');


Route::get('scambi','ScambiController@checkLog');
Route::get('scambi/yourplayer','ScambiController@yourplayer');
Route::get('scambi/allplayer','ScambiController@allplayer');
Route::post('scambi','ScambiController@proponi');

Route::get('partite','PartiteController@checkLog');
Route::get('partite/all','PartiteController@allSquad');
Route::get('partite/richiestePartite','PartiteController@richiestePartite');
Route::post('partite/richiesta','PartiteController@richiesta');
Route::post('partite/accetta','PartiteController@accetta');
Route::post('partite/rifiuta','PartiteController@rifiuta');

Route::get('news','NewsController@page');
Route::get('news/data','NewsController@news');