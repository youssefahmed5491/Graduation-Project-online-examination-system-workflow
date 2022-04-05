<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class proctor extends Model
{
    protected $connection="mysql2";
    use HasFactory;
    public function system_manager()
    {
        return $this->belongsTo('App\Models\system_manager', 'system_manager_id' );
    }

    public function subject()
    {
        return $this->belongsTo('App\Models\subject', 'subject_id' );
    }
    

}
