<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentExam extends Model
{
    protected $casts = [
        "answers" => "array",
    ];
    public function subject()
    {
        return $this->belongsTo(Subject::class, 'subject_id');
    }
}
