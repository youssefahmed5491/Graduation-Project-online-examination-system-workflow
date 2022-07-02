<?php

namespace App\Http\Controllers;

use App\Models\supervisor;
use Illuminate\Http\Request;
use Carbon\Carbon;

class SupervisorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
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

        $supervisor = Supervisor::where('email', $request->username)->first();

        $proctors = $supervisor->subject->proctors;
        $currentdate = Carbon::now()->toDateString();
        $currenttime = Carbon::now()->settimezone('EET')->toTimeString();
        $currentdatetime = Carbon::now()->settimezone('EET');
        $assignednumebr = count($proctors);
        if ($assignednumebr > 0) {
            $assigned = "Assigned";
        } else {
            $assigned = "Still Not Assigned";
        }
        if ($supervisor->subject["datetime"] >= $currentdatetime) {
            $status = "unfinished";
        } else {
            $status = "finished";
        }
        return response()->json([$supervisor->subject["title"], $assigned, $status]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\supervisor  $supervisor
     * @return \Illuminate\Http\Response
     */
    public function show(supervisor $supervisor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\supervisor  $supervisor
     * @return \Illuminate\Http\Response
     */
    public function edit(supervisor $supervisor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\supervisor  $supervisor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, supervisor $supervisor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\supervisor  $supervisor
     * @return \Illuminate\Http\Response
     */
    public function destroy(supervisor $supervisor)
    {
        //
    }
}
