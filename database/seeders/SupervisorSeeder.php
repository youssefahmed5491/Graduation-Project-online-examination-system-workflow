<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SupervisorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::connection("mysql2")->table('supervisors')->insert(
            [
                [
                    "id" => "100",
                    'username' => 'tonyfayez@gmail.com',
                    'password' => ('123456789'),
                    "subject_id" => ('Math'),
                ],
                [
                    "id" => "150",
                    'username'  => 'ahmed@gmail.com',
                    'password' => ('123456789'),
                    "subject_id" => ('physics1'),
                ]
            ]
        );
    }
}
