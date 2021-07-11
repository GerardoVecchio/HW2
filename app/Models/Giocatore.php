<?php
    namespace App\Models;
    use Illuminate\Database\Eloquent\Model;

    class Giocatore extends Model{
        public $timestamps = false;
        protected $table ='giocatore';
        protected $primaryKey='ssn';
        protected $fillable=['squadraN'];
    
    public function squadra(){
        return $this->belongsTo('App\Models\Squadra','squadraN','nome');
    }
    
    }
?>