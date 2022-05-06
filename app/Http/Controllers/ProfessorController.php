<?php

namespace App\Http\Controllers;

use App\Models\professor;
use Illuminate\Http\Request;
use App\Models\ProfessorSubject;
use App\Models\Subject;

class ProfessorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\professor  $professor
     * @return \Illuminate\Http\Response
     */
    public function show(Professor $professor)
    {
        $professorsubject = ProfessorSubject::where("professor_id", $professor->id)->get();

        $subjectsid = $professorsubject->map(function ($item, $key) {
            return strtoupper($item->subject_id);
        });

        $subject = Subject::whereIn("id", $subjectsid)->get();

        $subjects_title = $subject->map(function ($item, $key) {
            return strtoupper($item->title);
        });

        return response($subjects_title);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\professor  $professor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, professor $professor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\professor  $professor
     * @return \Illuminate\Http\Response
     */
    public function destroy(professor $professor)
    {
        //
    }
}
