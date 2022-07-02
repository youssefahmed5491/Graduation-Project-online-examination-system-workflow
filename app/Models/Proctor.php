<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proctor extends Model
{

    use HasFactory;
    public function system_manager()
    {
        return $this->belongsTo('App\Models\system_manager', 'system_manager_id');
    }

    public function subjects()
    {
        return $this->belongsToMany(Subject::class);
    }

    public function professor()
    {
        return $this->belongsToMany('App\Models\professor');
    }
}
