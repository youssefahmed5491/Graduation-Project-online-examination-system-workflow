<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SystemmanagerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::connection("mysql2")->table('system_managers')->insert(
            [
                [
                    "id" => "9999",
                    'username' => 'tonyfayez@gmail.com',
                    'password' => ('123456789'),

                ],
                [
                    "id" => "1234",
                    'username' => 'ahmed@gmail.com',
                    'password' => ('123456789'),

                ]
            ]
        );
    }
}
