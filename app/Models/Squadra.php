<?php
    namespace App\Models;
    use Illuminate\Database\Eloquent\Model;

    class Squadra extends Model{
        public $timestamps = false;
        protected $table ='squadra';
        protected $primaryKey='nome';
        protected $fillable=['allenatore'];
        public $incrementing=false;
    
    public function allenatore(){
        return $this->belongsTo('App\Models\Utente','allenatore','userName');
    }

    public function giocatore(){
        return $this->hasMany('App\Models\Giocatore','squadraN','nome');
    }
    }
?>