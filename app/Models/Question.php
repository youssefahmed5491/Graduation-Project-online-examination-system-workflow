<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Question extends Model
{


    use HasFactory;


    public function subject()
    {
        return $this->belongsTo('App\Models\subject', 'subject_id');
    }


    protected $casts = [
        "id",
        "QS_TEXT",
        "QS_Ans" => 'array',
        "Duration",
        "chapter",
    ];
    public function professor()
    {
        return $this->belongsToMany('App\Models\professor');
    }
}
