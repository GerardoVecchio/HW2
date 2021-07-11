<?php
    namespace App\Models;
    use Illuminate\Database\Eloquent\Model;

    class Partite extends Model{
        public $timestamps = false;
        protected $table ='partite';
        protected $primaryKey='idPartita';
    }

?>