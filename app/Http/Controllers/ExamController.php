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


        // ini_set('max_execution_time', 300); //300 seconds = 5 minute
        $subject = Subject::where('title', $request->subject)->first();
        $chapters = $subject->set_of_criteria;
        $type = $request->examtype;
        $chaptersquestions = array();
        $chaptersquestions = $request->chaptersquestions;

        $easynumber = $request->easynumberquestions;
        $mediumnumber = $request->mediumnumberquestions;
        $hardnumber = $request->hardnumberquestions;
        // dd(Question::where("difficulty_level", 0)->count());
        if ($easynumber > Question::where("difficulty_level", 0)->count()) {

            return response()->json("no enough easy questions");
        } elseif ($mediumnumber > Question::where("difficulty_level", 1)->count()) {
            return response()->json("no enough medium questions");
        } elseif ($hardnumber > Question::where("difficulty_level", 2)->count()) {
            return response()->json("no enough hard questions");
        }
        // dd(count($chapters));
        for ($z = 0; $z < count($chapters); $z++) {
            if ($chaptersquestions[$z] > Question::where("chapter", $chapters[$z])->count()) {

                return response()->json("no enough questions for chapter" . $chapters[$z]);
            }
        }







        $questions = [$easynumber, $mediumnumber, $hardnumber];

        $questionsarray = array();

        for ($h = 0; $h < count($chapters); $h++) {
            if ($chaptersquestions[$h] == 0) {
                unset($chaptersquestions[$h]);
                unset($chapters[$h]);
            }
        }

        for ($x = 0; $x < count($questions); $x++) {
            if ($questions[$x] == 0) {

                unset($questions[$x]);
            }
        }


        $number = array_sum($questions);

        for ($x = 0; $x < $number; $x++) {

            $count1 = 0;
            while ($count1 < 4) {

                $temp = Question::where('subject_id', $subject->id)->where("chapter", $chapters[array_rand($chapters)])->where("difficulty_level", array_rand($questions))->inRandomOrder()->first();

                $tempdiff = $temp->difficulty_level;
                $tempch = $temp->chapter;

                $ch = array_search($tempch, $chapters);
                // if (isset($chaptersquestions[$ch]) == false) {
                //     $ch = $ch % count($chaptersquestions);
                // }

                //  dd($ch);
                if ($questions[$tempdiff] != 0 && $chaptersquestions[$ch] != 0) {
                    ${"Q$count1"} = [$tempdiff, $ch];

                    $count1++;
                }
            }
            // dd($Q0, $Q1, $Q2, $Q3);

            unset($arrayofpopulation);
            unset($arrayofmaxxy);
            unset($sortedDesc);
            unset($sortedDescindex);
            for ($i = 0; $i <= 3; $i++) {
                ${"population$i"} = [$questions[${"Q$i"}[0]], $chaptersquestions[${"Q$i"}[1]]];
                $sum = array_sum(${"population$i"});
                $arrayofpopulation[] = [
                    "name" => "population$i",
                    "sum" => $sum
                ];
            }
            //  dd($Q0, $arrayofpopulation);
            $sortedDesc = collect($arrayofpopulation)->sortBy('sum')->reverse()->toArray();
            $sortedDescindex = array_keys($sortedDesc);

            $max0 = ${"Q$sortedDescindex[0]"};
            $max1 =  ${"Q$sortedDescindex[1]"};
            $max2 = ${"Q$sortedDescindex[0]"};
            $max3 =  ${"Q$sortedDescindex[1]"};
            $tempmax = $max0[1];
            $max0[1] = $max1[1];
            $max1[1] = $tempmax;
            unset($arrayofmaxxy);

            for ($j = 0; $j <= 3; $j++) {

                //  print_r(isset($questions[${"max$j"}[0]]), isset($chaptersquestions[${"max$j"}[1]]));
                ////////////////////////////////////////////////////////////////////////////////////////////////
                // if (isset($chaptersquestions[${"max$j"}[1]]) == false) {
                //     print_r(isset($chaptersquestions[${"max$j"}[1] % count($chaptersquestions)]));
                // } else {
                //     print_r(isset($chaptersquestions[${"max$j"}[1]]));
                // } 
                // ////////////////////////////////////////////////////////////////////////////////////////////////      TESTING
                // if (isset($chaptersquestions[${"max$j"}[1]]) == false && isset($questions[${"max$j"}[0]]) == true) {

                //     ${"maxxy$j"} = [$questions[${"max$j"}[0]], $chaptersquestions[${"max$j"}[1] % count($chaptersquestions)]];
                // }

                //  elseif (isset($questions[${"max$j"}[0]]) == false && isset($chaptersquestions[${"max$j"}[1]]) == true) {
                //     ${"maxxy$j"} = [$questions[${"max$j"}[0] % count($questions)], $chaptersquestions[${"max$j"}[1]]];
                // }
                // else {
                ${"maxxy$j"} = [$questions[${"max$j"}[0]], $chaptersquestions[${"max$j"}[1]]];
                // }

                $sum2 = array_sum(${"maxxy$j"});

                $arrayofmaxxy[] = [
                    "name" => "maxxy$j",
                    "sum" => $sum2
                ];
            }
            //  dd($max0, $max1, $max2, $max3, $sortedDesc);
            unset($sortedDescmaxxy);
            unset($sortedDescindexmaxxy);

            $sortedDescmaxxy = collect($arrayofmaxxy)->sortBy('sum')->reverse()->toArray();
            $sortedDescindexmaxxy = array_keys($sortedDescmaxxy);

            $topmax = ${"max$sortedDescindexmaxxy[0]"};



            $data = Question::where("difficulty_level", $topmax[0],)->where("chapter", $chapters[$topmax[1]])->where("type", $type)->inRandomOrder()->first();
            while (in_array($data, $questionsarray)) {
                $data = Question::where("difficulty_level", $topmax[0],)->where("chapter", $chapters[$topmax[1]])->where("type", $type)->inRandomOrder()->first();
            }
            array_push($questionsarray, $data);



            $questions[$topmax[0]]--;

            $chaptersquestions[$topmax[1]]--;

            if ($questions[$topmax[0]] == 0) {
                unset($questions[$topmax[0]]);
            }
            if ($chaptersquestions[$topmax[1]] == 0) {
                unset($chaptersquestions[$topmax[1]]);
                unset($chapters[$topmax[1]]);
            }

            // print_r($questionsarray);
        }

        // return response()->json($questionsarray);





        // $model[] = array_merge($easyquestions, $mediumquestions, $hardquestions);




        ExamsTemp::insert([
            "modelquestions" => json_encode($questionsarray),
            "subject_id" => $subject->id,
        ]);

        return response()->json(true);
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
