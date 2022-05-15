<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Proctor;

class ProctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Proctor::create([
            'username'  => '7mada',
            'email' => 'tonyfayez@gmail.com',
            'password' => ('123456789'),
        ]);
        Proctor::create([
            'username'  => '7mada222222',
            'email'  => 'ahmed@gmail.com',
            'password' => '123456789',
        ]);
    }
}
