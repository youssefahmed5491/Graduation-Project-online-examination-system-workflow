<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use phpDocumentor\Reflection\Types\Integer;

class professor extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('professors')->insert([
            'username' => ("tony"),
            'email' => 'tonyfayez@gmail.com',
            'password' => ('123456789'),
            "subject_id"=>('123'),
        ]);
    }
}
