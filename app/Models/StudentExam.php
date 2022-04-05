<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentExam extends Model
{
    use HasFactory;
<<<<<<< HEAD
    public function subject()
    {
        return $this->belongsTo('App\Models\subject', 'subject_id' );
    }
=======
>>>>>>> aaad6dd (all DB tables added)
}
