<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            ProfessorSeeder::class,
            SupervisorSeeder::class,
            SubjectsSeeder::class,
            StudentSeeder::class,
            SystemmanagerSeeder::class,
            ProctorSeeder::class
        ]);
    }
}
