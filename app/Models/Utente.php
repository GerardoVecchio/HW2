<?php
    namespace App\Models;
    use Illuminate\Database\Eloquent\Model;

    class Utente extends Model{
        public $timestamps = false;
        protected $table ='utente';
        protected $primaryKey='userName';
        protected $fillable=['userName','password','email'];
        public $incrementing=false;
    
        public function squadra(){
            return $this->hasOne('App\Models\Squadra','allenatore','userName');
        }
    }
    

?>