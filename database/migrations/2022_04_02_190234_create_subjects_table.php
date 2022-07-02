<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // subjects:
        // id: 1, name: 'Math'
        // id: 2, name: 'Mechanics'

        // students:
        // id: 1, name: 'Tony
        // id: 2, name: 'Ray'

        // subject_students: 'pivot table'
        // id: 1, student_id: 2, subject_id: 1
        // id: 2, student_id: 2, subject_id: 2
        // id: 3, student_id: 1, subject_id: 1
        Schema::create('subjects', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\Supervisor::class);
            $table->string('title');
            $table->string('uid');
            $table->longText('set_of_criteria'); // we want to make this array of strings
            $table->date('date')->nullable();
            $table->time('time')->nullable();
            $table->time("duration")->nullable();
            $table->datetime("datetime")->nullable();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subjects');
    }
}
