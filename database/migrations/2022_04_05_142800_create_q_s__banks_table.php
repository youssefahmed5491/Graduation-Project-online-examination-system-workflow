<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQSBanksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('qs_banks', function (Blueprint $table) {
<<<<<<< HEAD
            $table->increments('id');
=======
            $table->id();
>>>>>>> aaad6dd (all DB tables added)
            $table->integer('subject_id')->unsigned();
            $table->string('Qs_Text');
            $table->string('Qs_Ans');
            $table->integer("Difficulty_Level");
<<<<<<< HEAD
            
            //$table->foreign('subject_id')->references('id')->on('subjects');
=======
            $table->foreign('subject_id')->references('id')->on('subjects');
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
        Schema::dropIfExists('q_s__banks');
    }
}
