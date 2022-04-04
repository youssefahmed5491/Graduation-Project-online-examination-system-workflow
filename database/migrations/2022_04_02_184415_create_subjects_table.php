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
            //remember 3 forign keys
            $table->string('subject_name');
            $table->string('subject_supervisor');
            $table->string('professor'); // we want to make this array of strings
            $table->longText('set_of_crieria'); // we want to make this array of strings
            $table->integer('student_num'); 
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
