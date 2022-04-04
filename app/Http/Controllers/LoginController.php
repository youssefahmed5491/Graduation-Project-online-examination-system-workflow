<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
<<<<<<< HEAD
use App\Models\student;
use App\Models\professor;
use App\Models\proctor;
use App\Models\supervisor;
use App\Models\system_manager;
=======
>>>>>>> d5f7117 (api created)

class LoginController extends Controller
{
    function login (Request $request){
<<<<<<< HEAD
        
        if($request->type=="Student"){
            $username=student::where('username',$request->username);
            $password=student::where('password',$request->password);
            if($username->exists() && $password->exists()){
             return response()->json(["exists"]);
            }
        }
            if($request->type=="Doctor"){
                $username=professor::where('username',$request->username);
                $password=professor::where('password',$request->password);
                if($username->exists() && $password->exists()){
                 return response()->json(["exists"]);
                }
                
        }
        if($request->type=="proctor"){
            $username=proctor::where('username',$request->username);
            $password=proctor::where('password',$request->password);
            if($username->exists() && $password->exists()){
             return response()->json(["exists"]);
            }
    }
    if($request->type=="Supervisor"){
        $username=supervisor::where('username',$request->username);
        $password=supervisor::where('password',$request->password);
        if($username->exists() && $password->exists()){
         return response()->json(["exists"]);
        }
}
if($request->type=="System Manager"){
    $username=system_manager::where('username',$request->username);
    $password=system_manager::where('password',$request->password);
    if($username->exists() && $password->exists()){
     return response()->json(["exists"]);
    }

}
    }
    }
=======

    }
}
>>>>>>> d5f7117 (api created)
