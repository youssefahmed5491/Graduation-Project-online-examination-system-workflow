<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your applicati
on. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [App\Http\Controllers\LoginController::class, "login"]);
Route::apiResource('professors', ProfessorController::class)->only(["store", "show"]);
Route::apiResource('students', StudentController::class)->only(["store", "show"]);
Route::apiResource('proctors', ProctorController::class);
Route::apiResource('supervisors', SupervisorController::class)->only(["store", "show"]);
Route::apiResource('systemmanagers', SystemManagerController::class)->only(["store", "show"]);
Route::apiResource('subjects', SubjectController::class);
Route::apiResource('exam', ExamController::class);
Route::apiResource('professors.subjects', ProfessorSubjectController::class);
Route::apiResource('subjects.proctors', SubjectProctorController::class);
Route::apiResource('subjects.exam', SubjectExamController::class);
Route::apiResource('examtemp', ExamsTempController::class)->only(["show", "index"]);
Route::apiResource('subjects.examtemp', SubjectExamTempController::class)->only(["index"]);
Route::apiResource('students.subjects', StudentSubjectController::class);
Route::apiResource('students.exams', StudentExamController::class);
Route::apiResource('date', DateController::class)->only(["index", "store"]);
Route::apiResource("QSBank", QuestionsController::class);
