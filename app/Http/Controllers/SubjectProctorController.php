<?php

namespace App\Http\Controllers;

use App\Models\SubjectProctor;
use Illuminate\Http\Request;
use App\Models\Subject;
use App\Models\Proctor;

class SubjectProctorController extends Controller
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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

        $subject = Subject::where("id", $request->subjectid)->first();
        $proctors = array();
        $proctorlist = $request->proctorsList;
        foreach ($proctorlist as $proctorlist) {
            $proctors[] = Proctor::where("username", $proctorlist)->get();
        }

        foreach ($proctors as $proctor) {
            $subject->proctors()->attach($proctor);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SubjectProctor  $subjectProctor
     * @return \Illuminate\Http\Response
     */
    public function show(SubjectProctor $subjectProctor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SubjectProctor  $subjectProctor
     * @return \Illuminate\Http\Response
     */
    public function edit(SubjectProctor $subjectProctor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubjectProctor  $subjectProctor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SubjectProctor $subjectProctor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SubjectProctor  $subjectProctor
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubjectProctor $subjectProctor)
    {
        //
    }
}
