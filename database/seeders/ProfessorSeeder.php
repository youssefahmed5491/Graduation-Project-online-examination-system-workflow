<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use phpDocumentor\Reflection\Types\Integer;

class ProfessorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::connection("mysql2")->table('professors')->insert(
            [
                [
                    "id" => "123",
                    'username' => ("tony"),
                    'email' => 'tonyfayez@gmail.com',
                    'password' => ('123456789'),
                    "subject_id" => ('Math'),
                ],
                [
                    "id" => "456",
                    'username' => ("ahmed"),
                    'email' => 'ahmed@gmail.com',
                    'password' => ('123456789'),
                    "subject_id" => ('physics1'),
                ]
            ]
        );
    }
}
