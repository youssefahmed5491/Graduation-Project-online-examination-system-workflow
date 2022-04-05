<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class subject extends Model
{
    protected $connection="mysql2";
    use HasFactory;
// for one to one relation
    public function supervisor()
    {
        return $this->belongsTo('App\Models\supervisor', 'supervisor_id' );
    }
public function schedeule()
{
    return $this->hasOne('App\Models\schedeule', 'schedeule_id' );
}
////////////////////////////
}
