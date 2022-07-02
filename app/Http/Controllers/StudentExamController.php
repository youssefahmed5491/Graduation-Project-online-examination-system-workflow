<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Exam;
use App\Models\StudentExam;

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
        $studentanswer = array();
        $length = count($exam->modelquestions);

        $correctanswerarrayfinal = array();
        for ($i = 0; $i < $length; $i++) {
            $correctanswerarrayfinal[] = $exam->modelquestions[$i]["correct_answer"];
        }
        for ($i = 0; $i < $length; $i++) {
            $studentanswer[$i] = $request[$i];
            if ($request[$i] == $correctanswerarrayfinal[$i]) {
                $count++;
            }
        }

        StudentExam::insert([
            "student_id" => $student->id,
            "exam_id" => $exam->id,
            "answers" => json_encode($studentanswer),
            "grade" => $count
        ]);

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
