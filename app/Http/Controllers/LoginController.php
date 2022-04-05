<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student;

class LoginController extends Controller
{
    function login (Request $request){
        
        if($request->type=="Student"){
            $username=student::connection("mysql2")->where('username',$request->username);
            $password=student::connection("mysql2")->where('password',$request->password);
            if($username->exists() && $password->exists()){
             return response()->json(["exists"]);
            }
        }
    }
}
