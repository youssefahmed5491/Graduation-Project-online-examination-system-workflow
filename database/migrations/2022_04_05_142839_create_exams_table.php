<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exams', function (Blueprint $table) {
<<<<<<< HEAD
            $table->increments('id');
            $table->integer("Qs_id")->unsigned();
            $table->foreign("Qs_id")->references("id")->on("qs_banks");
            $table->integer('subject_id');
=======
            $table->id();
            $table->integer("Qs_id")->unsigned();
            $table->foreign("Qs_id")->references("id")->on("qs_banks");
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
        Schema::dropIfExists('exams');
    }
}
