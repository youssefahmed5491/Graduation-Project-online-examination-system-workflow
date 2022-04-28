<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class professor extends Model
{
    protected $connection = "mysql2";
    protected $fillable = [
        "username",
        "email",
        "passowrd"
    ];
    use HasFactory;
}
