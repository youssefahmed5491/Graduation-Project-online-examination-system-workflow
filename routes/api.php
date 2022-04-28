<?php

use Illuminate\Http\Request;
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
////////// test
=======
Route::get('login', [App\Http\Controllers\LoginController::class,"login"]);
>>>>>>> f5387e8 (api created)
=======
Route::post('login', [App\Http\Controllers\LoginController::class,"login"]);
>>>>>>> 3dd7033 (a5r t3delat)
=======
Route::post('login', [App\Http\Controllers\LoginController::class,"login"]);
=======
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//Route::post('register', 'API\RegisterController@register');
Route::post('login', 'API\loginController@login');

Route::middleware('auth:api')->group( function (){
    //Route::resource('products', 'API\ProductController');
});
>>>>>>> 3a71cdd (base controller)
>>>>>>> c9ad1d4 (base controller)
=======
Route::post('login', [App\Http\Controllers\LoginController::class,"login"]);
>>>>>>> d78440b (base controller)
=======
=======
>>>>>>> 01965ed (api created)
=======
>>>>>>> 88c764f (a5r t3delat)
=======
>>>>>>> a6d259d (rebased with master)
=======
>>>>>>> 0b8d04d (add QS and back of view)
Route::post('login', [App\Http\Controllers\LoginController::class,"login"]);
=======
=======
>>>>>>> d5f7117 (api created)
=======
>>>>>>> dd51ca4 (a5r t3delat)
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
////////// test
<<<<<<< HEAD
>>>>>>> 34a8fae (test)
<<<<<<< HEAD
>>>>>>> 520b583 (test)
=======
=======
=======
Route::get('login', [App\Http\Controllers\LoginController::class,"login"]);
>>>>>>> f5387e8 (api created)
<<<<<<< HEAD
>>>>>>> d5f7117 (api created)
<<<<<<< HEAD
>>>>>>> 01965ed (api created)
=======
=======
=======
Route::post('login', [App\Http\Controllers\LoginController::class,"login"]);
>>>>>>> 3dd7033 (a5r t3delat)
>>>>>>> dd51ca4 (a5r t3delat)
<<<<<<< HEAD
>>>>>>> 88c764f (a5r t3delat)
=======
=======
Route::post('login', [App\Http\Controllers\LoginController::class,"login"]);
>>>>>>> 36eaeac (rebased with master)
<<<<<<< HEAD
>>>>>>> a6d259d (rebased with master)
=======
=======
Route::post('login', [App\Http\Controllers\LoginController::class, "login"]);

Route::post('AddQS', [App\Http\Controllers\QSBankController::class, "addqS"]);
Route::get('viewqs', [App\Http\Controllers\QSBankController::class, "viewqs"]);
>>>>>>> 5fbe4e0 (add QS and back of view)
>>>>>>> 0b8d04d (add QS and back of view)
=======
Route::post('login', [App\Http\Controllers\LoginController::class, "login"]);
>>>>>>> ca824be ( not complete changes)
