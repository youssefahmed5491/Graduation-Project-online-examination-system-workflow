<?php

namespace App\Http\Controllers;

use App\Models\professor;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\ProfessorSubject;
use App\Models\Subject;
use App\Models\Question;
use Illuminate\Support\Arr;

class ProfessorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */

    public function store(Request $request)
    {


        $professor = Professor::where('email', $request->username)->first();


        return response()->json($professor);
    }
    /**
     * Display the specified resource.
     *
     * @param Professor $professor
     * @return JsonResponse
     * @api GET /professors/:id
     */
    public function show(Professor $professor): JsonResponse
    {
        $subjects = $professor->subjects;
        $questions = array();
        foreach ($subjects as $subject) {
            $questions[] = $subject->questions;
        }


        return response()->json($questions);
    }
    public function index()
    {
        $data = Professor::all();
        return response()->json($data);
    }
}
