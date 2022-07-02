<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use App\Models\Exam;
use App\Models\Student;
use App\Models\StudentExam;
use Illuminate\Http\Request;
use Nette\Utils\DateTime;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function grading(Subject $subject): JsonResponse
    {
        $exams = Exam::where("subject_id", $subject->id)->get("id");

        $grades = array();

        // $count1=0;
        // $count2=0;
        // $count3=0;
        // $count4=0;
        // $count5=0;
        foreach ($exams as $exam) {

            $data = StudentExam::where("exam_id", $exam->id)->get();
            foreach ($data as $data2) {
                if ($data)
                    $grades[] = $data2->grade;
            }
        }


        //     for($i=0 ; $i<count($grades); $i++) {
        //     if ($grades[$i]["grade"]<11)
        //     {$count1=$count1+1;}
        //     elseif ($grades[$i]["grade"]<21)
        //     {$count2=$count2+1;}
        //     elseif ($grades[$i]["grade"]<31)
        //     {$count3=$count3+1;}
        //     elseif ($grades[$i]["grade"]<41)
        //     {$count4=$count4+1;}
        //     elseif ($grades[$i]["grade"]<51)
        //     {$count5=$count5+1;}
        // }


        return response()->json($grades);
    }
    public function index()
    {
        $subjects = Subject::all();
        return response()->json($subjects);
    }
    public function status(Subject $subject)
    {
        $currentdate = Carbon::now()->toDateString();
        $currenttime = Carbon::now()->settimezone('EET')->toTimeString();
        $currentdatetime = Carbon::now()->settimezone('EET');


        if ($subject["datetime"] >= $currentdatetime) {
            $status = "unfinished";
        } else {
            $status = "finished";
        }
        return response()->json($status);
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

        $data = Subject::where("title", $request->value)->first();


        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Subject $subject)
    {

        return response()->json(json_encode($subject->title));
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
    public function update(Request $request, Subject $subject)
    {

        $subject->date = $request->date;
        $subject->time = $request->time;
        $subject->duration = $request->duration;
        $subject->url = $request->url;

        $endtime = date("H:i:s", strtotime($request->time) + strtotime($request->duration));
        $subject->endtime = $endtime;
        $datetime = Carbon::parse($request->date . $endtime)->toDatetimeString();
        $subject->datetime = $datetime;




        $subject->update();
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
}
