<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $connection = "mysql2";

    protected $casts = [
        'set_of_criteria' => 'array'
    ];

    public function supervisor()
    {
        return $this->belongsTo(Supervisor::class);
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }
    public function studentexams()
    {
        return $this->hasMany(StudentExam::class);
    }
    public function exams()
    {
        return $this->hasMany(Exam::class); //////////////////////////////exam modele
    }
    public function professors()
    {
        return $this->belongsToMany(Professor::class);
    }
    public function students()
    {
        return $this->belongsToMany(Student::class);
    }
}
