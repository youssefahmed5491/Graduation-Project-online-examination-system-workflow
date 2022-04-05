<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class professor extends Model
{
    protected $connection="mysql2";
<<<<<<< HEAD

=======
    protected $fillable =[
        "username",
        "email",
        "passowrd"
    ];
>>>>>>> 8e83944 (college tables done with authentication test)
    use HasFactory;
 
}
