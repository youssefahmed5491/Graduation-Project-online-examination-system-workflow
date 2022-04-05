<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentExamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_exams', function (Blueprint $table) {
<<<<<<< HEAD
            $table->increments('id');
            $table->integer('student_id')->unsigned();
            $table->integer('Exam_Model_id')->unsigned();
            $table->string('Student_Ans');
            $table->integer('subject_id');
            // to be checked 
            $table->foreign('student_id')->references('id')->on('college.students');
          //  $table->foreign('Exam_Model_id')->references('id')->on('exams');
=======
            $table->id();
            $table->integer('Student_id')->unsigned();
            $table->integer('Exam_Model_id')->unsigned();
            $table->string('Student_Ans');
            $table->foreign('Student_id')->references('id')->on('student');
            $table->foreign('Exam_Model_id')->references('id')->on('exam');
>>>>>>> aaad6dd (all DB tables added)
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
        Schema::dropIfExists('student_exams');
    }
}
