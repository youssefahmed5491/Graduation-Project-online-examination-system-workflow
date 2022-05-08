<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [App\Http\Controllers\LoginController::class, "login"]);
Route::apiResource('professors', ProfessorController::class)->only(["store", "show"]);
Route::apiResource('subjects', ProfessorController::class);
Route::apiResource('professors.subjects', ProfessorSubjectController::class)->except(['store', 'show']);
Route::apiResource("QSBank", QuestionsController::class);
