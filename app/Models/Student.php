<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    public function subjects()
    {
        return $this->belongsToMany(Subject::class);
    }
    use HasFactory;
}
