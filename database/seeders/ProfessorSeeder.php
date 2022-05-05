<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Professor;

class ProfessorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Professor::create(
            [
                'username' => "ahmed",
                'email' => 'ahmed@gmail.com',
                'password' => '123456789',
            ]
        );
        Professor::create(
            [
                'username' => 'tony',
                'email' => 'tonyfayez@gmail.com',
                'password' => '123456789',
            ]
        );
    }
}
