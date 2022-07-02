<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('students')->insert(
            [
                [
                    "id" => "5327",
                    'email'  => 'tonyfayez@gmail.com',
                    "username" => "trb2o etnen bo2o",
                    'password' => ('123456789'),
                ],
                [
                    "id" => "5555",
                    'email' => 'ahmed@gmail.com',
                    "username" => "trmle etnen melly",
                    'password' => ('123456789'),
                ]
            ]
        );
    }
}
