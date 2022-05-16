<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Exam;

class StudentExamController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student, Exam $exam)
    {
        $count = 0;
        $correctanswersarraytemp = array();
        $length = count($exam->modelquestions[0]);
        //$correctanswersarraytemp[] = $exam->modelquestions[0][0]["correct_answer"];
        $correctanswerarrayfinal = array();
        for ($i = 0; $i < $length; $i++) {
            $correctanswerarrayfinal[] = $exam->modelquestions[0][$i]["correct_answer"];
        }
        for ($i = 0; $i < $length; $i++) {
            if ($request[$i] == $correctanswerarrayfinal[$i]) {
                $count++;
            }
        }

        return response()->json($count);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
