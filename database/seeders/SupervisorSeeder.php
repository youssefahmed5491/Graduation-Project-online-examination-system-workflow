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
            "username" => "abo alz2aze2",
            'email' => 'tonyfayez@gmail.com',
            'password' => ('123456789'),
        ]);
        Supervisor::create([
            "username" => "abo altnanen",
            'email'  => 'ahmed@gmail.com',
            'password' => '123456789',
        ]);
    }
}
