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
        Schema::connection("mysql2")->create('subjects', function (Blueprint $table) {
           
            $table->increments('id');
            // for one to one relation
           
            $table->integer('supervisor_id')->unsigned();
         
            //////////////////////////
            $table->integer('Exam_id')->unsigned();
            $table->integer('StudentExam_id')->unsigned();
             $table->integer('student_id');
            $table->string('subject_name');
            $table->string('subject_supervisor');
            $table->string('professor'); // we want to make this array of strings
            $table->longText('set_of_crieria'); // we want to make this array of strings
            $table->integer('student_num'); 
            $table->timestamps();
             
            //checked (for one to one relation)
            

             $table->foreign('supervisor_id')->references('id')->on('college.supervisors')
             ->onDelete('cascade');
             ///////////////////////////////////

           // $table->foreign('Exam_id')->references('id')->on('Emax')->onDelete('cascade');
        
           // $table->foreign('StudentExam_id')->references('id')->on('StudentExam')->onDelete('cascade');
            
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
