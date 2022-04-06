<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class supervisor extends Model
{
    protected $connection="mysql2";
    use HasFactory;
    public function subject()
    {
        return $this->hasOne('App\subject' );
    }
}
