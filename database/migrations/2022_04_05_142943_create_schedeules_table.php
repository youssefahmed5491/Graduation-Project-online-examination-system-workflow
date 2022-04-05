<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchedeulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedeules', function (Blueprint $table) {
<<<<<<< HEAD
            $table->increments('id');
            $table->string('Date');
            $table->string('Start');
            $table->string('End');
             /// for one to one
            $table->integer('subject_id')->unsigned();
            $table->foreign('subject_id')->references('id')->on('college.subjects')
            ->onDelete('cascade');
            /////////////////////
=======
            $table->id();
            $table->integer('subject_id')->unsigned();
            $table->string('Date');
            $table->string('Start');
            $table->string('End');
            $table->foreign('subject_id')->references('id')->on('subjects');
            $table->timestamps();
>>>>>>> aaad6dd (all DB tables added)
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedeules');
    }
}
