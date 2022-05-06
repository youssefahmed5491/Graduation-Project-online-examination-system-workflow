<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Professor extends Model
{
    use HasFactory;

    protected $connection = "mysql2";
    protected $fillable = ['*'];


    public function subjects()
    {
        return $this->hasManyThrough(Subject::class, 'professor_subjects', "professor_id", 'subject_id"');
    }
}
