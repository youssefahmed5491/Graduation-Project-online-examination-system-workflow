<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Nette\Utils\Json;

use function PHPUnit\Framework\assertJson;
use App\Models\Subject;

class QSBankController extends Controller
{
    function store(Request $request)
    {
        $subjectdetails = Subject::where("title", "=", $request->subject)->get;
        info($subjectdetails);
        if ($request->type == "written") {
            Question::insert([
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
        $questions = Question::all();
        return  response()->json($questions);
    }


    public function show(Question $QSBank)
    {

        return response()->json($QSBank);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Question  $qS_Bank
     * @return \Illuminate\Http\Response
     */
    public function edit(Question $qS_Bank)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Question  $qS_Bank
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Question $qS_Bank)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Question  $qS_Bank
     * @return \Illuminate\Http\Response
     */
    public function destroy(Question $qS_Bank)
    {
        //
    }
}
