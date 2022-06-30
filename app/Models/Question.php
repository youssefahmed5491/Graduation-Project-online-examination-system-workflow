<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Question extends Model
{

public $timestamps = false;
    use HasFactory;


    public function Subject()
    {
        return $this->belongsTo(Subject::class, 'subject_id');
    }
    public function exam()
    {
        return $this->belongsTo(Exam::class);
    }



    protected $casts = [
        "text",
        "mcq_answers" => 'array',
        "duration",
        "chapter",
    ];
    // public function professor()
    // {
    //     return $this->belongsToMany(Professor::class);
    // }
}
