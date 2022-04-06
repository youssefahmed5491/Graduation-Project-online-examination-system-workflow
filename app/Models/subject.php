<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class subject extends Model
{
    protected $connection="mysql2";

    
    public function supervisor()
{
    return $this->belongsTo('App\supervisor', 'supervisor_id' );
}
public function professor()
{
    return $this->belongsTo('App\professor', 'professor_id' );
}
public function schedeule()
{
    return $this->belongsTo('App\schedeule', 'schedeule_id' );
}
}
