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
<<<<<<< HEAD:database/migrations/2022_04_05_142800_create_q_s__banks_table.php
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
=======
        Schema::create('q_s__banks', function (Blueprint $table) {
            $table->id();
            $table->string('subject_id');
            $table->string('Qs_Text');
            $table->json("QS_Ans")->nullable();
            $table->string("Difficulty_Level");
            $table->string("Duration");
>>>>>>> 5fbe4e0 (add QS and back of view):database/migrations/2022_04_05_142800_create_qsbanks_table.php
            $table->string("chapter");
            $table->string("correct_Ans")->nullable();
            $table->string("type");
            $table->foreign('subject_id')->references('id')->on('subjects');
<<<<<<< HEAD:database/migrations/2022_04_05_142800_create_q_s__banks_table.php
           
>>>>>>> 5221b01 (professor seeder and qsbank array datatype added)
=======
>>>>>>> 5fbe4e0 (add QS and back of view):database/migrations/2022_04_05_142800_create_qsbanks_table.php
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
