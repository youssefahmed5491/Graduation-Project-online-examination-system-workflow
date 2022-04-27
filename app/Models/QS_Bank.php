<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QS_Bank extends Model
{
<<<<<<< HEAD
    use HasFactory;
<<<<<<< HEAD
    public function subject()
    {
        return $this->belongsTo('App\Models\subject', 'subject_id' );
    }
=======
>>>>>>> aaad6dd (all DB tables added)
=======
    protected $connection = "mysql";

    protected $casts = [
        "QS_TEXT",
        "QS_Ans" => 'array',
        "Duration",
        "chapter",
    ];
>>>>>>> 5fbe4e0 (add QS and back of view)
}
