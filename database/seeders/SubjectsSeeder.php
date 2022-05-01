<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::connection("mysql2")->table('subjects')->insert([
            "id" => "Math",
            "supervisor_id" => 1,
            "Exam_id" => 1,
            "StudentExam_id" => 1,
            "student_id" => 1,
            "subject_name" => "Math",
            "subject_supervisor" => "Dr ahmed",
            "professor" => "dr maro",
            "set_of_crieria" => "anything",
            "student_num" => 150,



        ]);
    }
}
