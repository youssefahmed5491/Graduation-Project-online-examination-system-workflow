<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Supervisor;

class SupervisorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Supervisor::create([
            'username' => 'tonyfayez@gmail.com',
            'password' => ('123456789'),
        ]);
        Supervisor::create([
            'username'  => 'ahmed@gmail.com',
            'password' => '123456789',
        ]);
    }
}
