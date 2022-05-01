<?php

namespace App\Http\Controllers;

use App\Models\QS_Bank;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Nette\Utils\Json;

use function PHPUnit\Framework\assertJson;

class QSBankController extends Controller
{
    function store(Request $request)
    {

        if ($request->type == "written") {
            QS_Bank::insert([
                "correct_Ans" => $request->answerText,
                "subject_id" => $request->subject,
                "chapter" => $request->chapterNumber,
                "Qs_Text" => $request->questionText,
                "Difficulty_Level" => $request->difficulty,
                "Duration" => $request->duration,
                "type" => $request->type,
            ]);
        } else {
            QS_Bank::insert([
                "QS_Ans" => json_encode($request->answersarray),
                "correct_Ans" => $request->mcqcorrectans,
                "subject_id" => $request->subject,
                "chapter" => $request->chapterNumber,
                "Qs_Text" => $request->questionText,
                "Difficulty_Level" => $request->difficulty,
                "Duration" => $request->duration,
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
        $questions = QS_Bank::all();
        return  response()->json($questions);
    }


    public function show(QS_Bank $QSBank)
    {

        return response()->json($QSBank);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\QS_Bank  $qS_Bank
     * @return \Illuminate\Http\Response
     */
    public function edit(QS_Bank $qS_Bank)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\QS_Bank  $qS_Bank
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, QS_Bank $qS_Bank)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\QS_Bank  $qS_Bank
     * @return \Illuminate\Http\Response
     */
    public function destroy(QS_Bank $qS_Bank)
    {
        //
    }
}
