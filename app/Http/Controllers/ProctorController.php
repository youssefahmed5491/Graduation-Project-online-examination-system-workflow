<?php

namespace App\Http\Controllers;

use App\Models\proctor;
use Illuminate\Http\Request;

class ProctorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $proctors = Proctor::all();
        return response()->json($proctors);
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

        $proctor = Proctor::where('email', $request->username)->first();
        return response()->json($proctor);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\proctor  $proctor
     * @return \Illuminate\Http\Response
     */
    public function show(proctor $proctor)
    {
        return response()->json($proctor->subjects);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\proctor  $proctor
     * @return \Illuminate\Http\Response
     */
    public function edit(proctor $proctor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\proctor  $proctor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, proctor $proctor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\proctor  $proctor
     * @return \Illuminate\Http\Response
     */
    public function destroy(proctor $proctor)
    {
        //
    }
}
