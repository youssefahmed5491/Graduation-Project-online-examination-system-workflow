<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Psy\Util\Json;

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
            $table->json("QS_Ans");
            $table->integer("Difficulty_Level");
<<<<<<< HEAD
<<<<<<< HEAD
            
            //$table->foreign('subject_id')->references('id')->on('subjects');
=======
            $table->foreign('subject_id')->references('id')->on('subjects');
>>>>>>> aaad6dd (all DB tables added)
            $table->timestamps();
=======
            $table->integer("Duration");
            $table->string("chapter");
            $table->string("correct_Ans");
            $table->foreign('subject_id')->references('id')->on('subjects');
           
>>>>>>> 5221b01 (professor seeder and qsbank array datatype added)
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
