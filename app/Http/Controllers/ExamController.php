<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use Illuminate\Http\Request;
use App\Models\Subject;
use App\Models\Question;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use App\Models\ExamsTemp;

class ExamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
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


        $subject = Subject::where('title', $request->subject)->first();

        $chapters = $subject->set_of_criteria;
        $chapternumber = count($chapters);

        $totalchpatersquestions = 0;
        $chaptersquestions2 = $request->chaptersquestions;



        foreach ($chaptersquestions2 as $chaptersquestion) {
            $totalchpatersquestions = $totalchpatersquestions + $chaptersquestion;
        }
        // $totalchpatersquestions++;
        $easynumber = $request->easynumberquestions;
        $mediumnumber = $request->mediumnumberquestions;
        $hardnumber = $request->hardnumberquestions;
        $easyquestions = array();
        $mediumquestions = array();
        $hardquestions = array();
        $FinalModels = array();
        $model = array();
        /////////////////////////////////////////////////////////////////


        $chapterkey = 0;
        $i = 0;
        $j = 0;
        $k = 0;
        $numofquestions = 0;


        // $questionid3 = array();


        while ($i < $easynumber) {
            $easycount = 0;

            if ($chapterkey == $chapternumber) {
                $chapterkey = 0;
            }


            //$temp1 = Question::where("difficulty_level", 0)->where("chapter", $chapters[$chapterkey])->take(ceil(($easynumber / $totalchpatersquestions) * $chaptersquestions2[$chapterkey]))->inRandomOrder()->get();

            $data = Question::where("difficulty_level", 0)->where("type", $request->examtype)->where("chapter", $chapters[$chapterkey])->first();

            $length = 0;
            while ($length < floor((($easynumber / $totalchpatersquestions) * $chaptersquestions2[$chapterkey]) + 0.5)) {
                $data = Question::where("difficulty_level", 0)->where("type", $request->examtype)->where("chapter", $chapters[$chapterkey])->inRandomOrder()->first();

                while (in_array($data, $easyquestions)) {
                    $data = Question::where("difficulty_level", 0)->where("type", $request->examtype)->where("chapter", $chapters[$chapterkey])->inRandomOrder()->first();
                }
                $length++;
                if (count($easyquestions) < $easynumber) {
                    $easyquestions[] = $data;
                    $easycount++;
                } else {
                    break;
                }
            }

            $numofquestions = $numofquestions + $easycount;
            $i = $i + $easycount;

            if ($numofquestions >= $totalchpatersquestions) {
                break;
            }
            $chapterkey++;
        }




        while ($j < $mediumnumber) {
            $mediumcount = 0;
            if ($chapterkey == $chapternumber) {
                $chapterkey = 0;
            }


            $data = Question::where("difficulty_level", 1)->where("type", $request->examtype)->where("chapter", $chapters[$chapterkey])->first();

            $length = 0;
            while ($length < floor((($mediumnumber / $totalchpatersquestions) * $chaptersquestions2[$chapterkey]) + 0.5)) {
                $data = Question::where("difficulty_level", 1)->where("type", $request->examtype)->where("chapter", $chapters[$chapterkey])->inRandomOrder()->first();

                while (in_array($data, $mediumquestions)) {

                    $data = Question::where("difficulty_level", 1)->where("chapter", $chapters[$chapterkey])->where("type", $request->examtype)->inRandomOrder()->first();
                }
                $length++;
                if (count($mediumquestions) < $mediumnumber) {
                    $mediumquestions[] = $data;
                    $mediumcount++;
                } else {
                    break;
                }
            }

            $numofquestions = $numofquestions + $mediumcount;
            $j = $j + $mediumcount;

            if ($numofquestions >= $totalchpatersquestions) {
                break;
            }
            $chapterkey++;
        }






        while ($k <= $hardnumber) {
            $hardcount = 0;
            if ($chapterkey == $chapternumber) {
                $chapterkey = 0;
            }


            $data = Question::where("difficulty_level", 2)->where("type", $request->examtype)->where("chapter", $chapters[$chapterkey])->first();

            $length = 0;
            while ($length < floor((($hardnumber / $totalchpatersquestions) * $chaptersquestions2[$chapterkey]) + 0.5)) {
                $data = Question::where("difficulty_level", 2)->where("chapter", $chapters[$chapterkey])->inRandomOrder()->first();

                while (in_array($data, $hardquestions)) {

                    $data = Question::where("difficulty_level", 2)->where("chapter", $chapters[$chapterkey])->where("type", $request->examtype)->inRandomOrder()->first();
                }
                if (count($hardquestions) < $hardnumber) {
                    $hardquestions[] = $data;
                    $hardcount++;
                } else {
                    break;
                }
                $length++;
            }



            $numofquestions = $numofquestions + $hardcount;
            $k = $k + $hardcount;


            if ($numofquestions >= $totalchpatersquestions) {
                break;
            }
            $chapterkey++;
        }




        $model[] = array_merge($easyquestions, $mediumquestions, $hardquestions);




        ExamsTemp::insert([
            "modelquestions" => json_encode($model),
            "subject_id" => $subject->id,
            "duration" => $request->duration,
        ]);
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Exam  $exam
     * @return \Illuminate\Http\Response
     */
    public function show(Exam $exam)
    {
        return response()->json($exam->modelquestions);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Exam  $exam
     * @return \Illuminate\Http\Response
     */
    public function edit(Exam $exam)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Exam  $exam
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Exam $exam)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Exam  $exam
     * @return \Illuminate\Http\Response
     */
    public function destroy(Exam $exam)
    {
        //
    }
}
