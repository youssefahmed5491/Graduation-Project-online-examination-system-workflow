<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class professor extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::connection("mysql2")->table('professor')->insert([
            'name' => Str::make("elmoungi"),
            'email' => Str::make("elmoungi@gmail.com"),
            'password' => Str::make('123456789'),
        ]);
    }
}
