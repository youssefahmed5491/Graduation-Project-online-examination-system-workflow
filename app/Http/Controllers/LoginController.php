<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student;
use App\Models\professor;
use App\Models\proctor;
use App\Models\supervisor;
use App\Models\system_manager;
use App\Models\SystemManager;

class LoginController extends Controller
{
    function login(Request $request)
    {


        if ($request->type == "Student") {
            $username = student::where('email', $request->username)->first();


            if ($username && $username->password == $request->password) {
                return response()->json($username);
            } else {
                response()->json(["not exist"]);
            }
        }
        if ($request->type == "Doctor") {
            $username = professor::where('email', $request->username)->first();

            if ($username && $username->password === $request->password) {

                return response()->json($username);
            } else {
                response()->json(["not exist"]);
            }
        }
        if ($request->type == "Proctor") {
            $username = Proctor::where('email', $request->username)->first();
            if ($username && $username->password == $request->password) {
                return response()->json($username);
            } else {
                response()->json(["not exist"]);
            }
        }
        if ($request->type == "Supervisor") {
            $username = supervisor::where('email', $request->username)->first();

            if ($username && $username->password == $request->password) {
                return response()->json($username);
            } else {
                response()->json(["not exist"]);
            }
        }
        if ($request->type == "System Manager") {
            $username = SystemManager::where('email', $request->username)->first();
            if ($username && $username->password == $request->password) {
                return response()->json($username);
            } else {
                response()->json(["not exist"]);
            }
        }
    }
}
