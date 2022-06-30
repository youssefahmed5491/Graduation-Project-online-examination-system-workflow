<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Nette\Utils\Json;

use function PHPSTORM_META\map;
use function PHPUnit\Framework\assertJson;
use App\Models\Subject;
use App\Models\Professor;
use App\Models\ProfessorSubject;

class QuestionsController extends Controller
{
    function store(Request $request)
    {
        $subjectdetails = Subject::where("title", $request->subject)->first();
        // dd($subjectdetails->id);
        if ($request->type == "written") {
            Question::insert([
                "subject_title" => $subjectdetails->title,
                "correct_answer" => $request->answerText,
                "subject_id" => $subjectdetails->id,
                "chapter" => $request->chapterNumber,
                "text" => $request->questionText,
                "difficulty_level" => $request->difficulty,
                "duration" => $request->duration,
                "type" => $request->type,
            ]);
        } else {
            Question::insert([
                "subject_title" => $subjectdetails->title,
                "mcq_answers" => json_encode($request->answersarray),
                "correct_answer" => $request->mcqcorrectans,
                "subject_id" => $subjectdetails->id,
                "chapter" => $request->chapterNumber,
                "text" => $request->questionText,
                "difficulty_level" => $request->difficulty,
                "duration" => $request->duration,
                "type" => $request->type,

            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\jsonResponse
     */
    public function index()
    {

        $subject = Subject::find(1);
        dd($subject);
        //return response()->json($questions->subjects);
    }




    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Question  $qS_Bank
     * @return \Illuminate\Http\Response
     */
    public function edit(Question $QSBank)
    {
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Question  $qS_Bank
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Question $QSBank)
    {
     
      
         $QSBank->text = $request->text1;
         $QSBank->mcq_answers = $request->mcq_answers1;
         $QSBank->type = $request->type1;
         $QSBank->correct_answer = $request->correct_answer1;

        if($request->difficulty_level1=="Easy"){

            $QSBank->difficulty_level =0;
        }
        if($request->difficulty_level1=="Medium"){

            $QSBank->difficulty_level =1;
        }
        if($request->difficulty_level1=="Hard"){

            $QSBank->difficulty_level =2;
        }



         $QSBank->chapter = $request->chapter1;
     



        $QSBank->update();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Question  $qS_Bank
     * @return \Illuminate\Http\Response
     */
    public function destroy(Question $QSBank)
    {
        $QSBank->forceDelete();
    }
}
