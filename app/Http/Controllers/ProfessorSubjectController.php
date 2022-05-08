<?php

namespace App\Http\Controllers;

use App\Models\Professor;
use App\Models\Subject;
use Illuminate\Http\JsonResponse;

class ProfessorSubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Professor $professor
     * @return JsonResponse
     * @api GET /professors/:id/subjects
     */
    public function index(Professor $professor): JsonResponse
    {

        return response()->json($professor->subjects);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Professor $professor
     * @param Subject $subject
     * @return JsonResponse
     * @api PATCH /professors/:id/subjects/:id
     */
    public function update(Professor $professor, Subject $subject): JsonResponse
    {
        $professor->subjects()->attach($subject);
        return response()->json($professor->load('subjects'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Professor $professor
     * @param Subject $subject
     * @return JsonResponse
     * @api DELETE /professors/:id/subjects/:id
     */
    public function destroy(Professor $professor, Subject $subject): JsonResponse
    {
        $professor->subjects()->detach($subject->id);
        return response()->json($professor->load('subjects'));
    }
}
