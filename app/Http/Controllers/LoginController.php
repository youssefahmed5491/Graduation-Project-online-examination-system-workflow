<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student;
use App\Models\professor;
use App\Models\proctor;
use App\Models\supervisor;
use App\Models\system_manager;

class LoginController extends Controller
{
    function login(Request $request)
    {


        if ($request->type == "Student") {
            $username = student::where('username', $request->username);

            if ($username->exists() && $username->password = $request->password) {
                return response()->json($username);
            } else {
                response()->json(["not exist"]);
            }
        }
        if ($request->type == "Doctor") {
            $username = professor::where('email', $request->username)->first();

            if ($username->exists() && $username->password === $request->password) {

                return response()->json($username);
            } else {
                response()->json(["not exist"]);
            }
        }
        if ($request->type == "proctor") {
            $username = proctor::where('username', $request->username);
            if ($username->exists() && $username->password = $request->password) {
                return response()->json($username);
            } else {
                response()->json(["not exist"]);
            }
        }
        if ($request->type == "Supervisor") {
            $username = supervisor::where('username', $request->username);

            if ($username->exists() && $username->password = $request->password) {
                return response()->json($username);
            } else {
                response()->json(["not exist"]);
            }
        }
        if ($request->type == "System Manager") {
            $username = system_manager::where('username', $request->username);
            if ($username->exists() && $username->password = $request->password) {
                return response()->json($username);
            } else {
                response()->json(["not exist"]);
            }
        }
    }
}
