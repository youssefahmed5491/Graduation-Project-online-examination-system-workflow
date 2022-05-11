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
        DB::table('system_managers')->insert(
            [
                [
                    "id" => "9999",
                    "email" => "tonyfayez@gmail.com",
                    'username' => 'tonyfayez@gmail.com',
                    'password' => ('123456789'),

                ],
                [
                    "id" => "1234",
                    'email' => 'ahmed@gmail.com',
                    "username" => "om kalthom",
                    'password' => ('123456789'),

                ]
            ]
        );
    }
}
