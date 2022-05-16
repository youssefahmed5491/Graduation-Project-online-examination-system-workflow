<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExamsTempsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exams_temps', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\Subject::class);
            $table->Json("modelquestions");


            $table->enum("exam_type", ["MCQ", "Written"]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('exams_temps');
    }
}
