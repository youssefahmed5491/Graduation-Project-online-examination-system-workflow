<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Proctor;
use Carbon\Carbon;

class ProctorSubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Proctor $proctor)
    {
        //   dd("ay 7amada");

        return response()->json($proctor->subjects);
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
    public function store(Proctor $proctor)
    {
        $currentdate = Carbon::now();

        $dataunfinished = $proctor->subjects()->where('datetime', ">", $currentdate)->get();
        $datafinished = $proctor->subjects()->where('datetime', "<", $currentdate)->get();


        return response()->json([$dataunfinished, $datafinished]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
