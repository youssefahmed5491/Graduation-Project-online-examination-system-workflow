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
Route::apiResource('scheduele', ScheduleController::class)->only(["store"]);

Route::apiResource('exam', ExamController::class)->only(["store", "show"]);
Route::apiResource('professors.subjects', ProfessorSubjectController::class);
Route::apiResource('subjects.proctors', SubjectProctorController::class);

Route::apiResource('students.subjects', StudentSubjectController::class)->except(['store', 'show']);
Route::apiResource("QSBank", QuestionsController::class);
