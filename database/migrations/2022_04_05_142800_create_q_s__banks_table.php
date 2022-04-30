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
        Schema::create('q_s__banks', function (Blueprint $table) {
            $table->id();
            $table->string('subject_id');
            $table->string('Qs_Text');
            $table->json("QS_Ans")->nullable();
            $table->string("Difficulty_Level");
            $table->string("Duration");
            $table->string("chapter");
            $table->string("correct_Ans")->nullable();
            $table->string("type");
            $table->foreign('subject_id')->references('id')->on('subjects');
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
