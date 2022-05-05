<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Psy\Util\Json;

class CreateQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\Subject::class);
            $table->string('text');
            $table->string("mcq_answers")->nullable();
            $table->integer("difficulty_level");
            $table->integer("duration");
            $table->integer("chapter");
            $table->string("correct_answer")->nullable();
            $table->enum("type", ['mcq', 'written']);
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
