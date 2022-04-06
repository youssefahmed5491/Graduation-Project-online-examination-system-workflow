<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class professor extends Model
{
    protected $connection="mysql2";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
    protected $fillable =[
        "username",
        "email",
        "passowrd"
    ];
>>>>>>> 8e83944 (college tables done with authentication test)
=======
   
>>>>>>> 16050d7 (AllUsersHome.js b2t fl main bs <3)
=======
    protected $fillable=[
        "email",
        "password",
    ];
>>>>>>> 5221b01 (professor seeder and qsbank array datatype added)
    use HasFactory;
 
}
