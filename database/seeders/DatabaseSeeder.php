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
        ]);
//        $this->call(StudentSeeder::class);
//        $this->call(SystemmanagerSeeder::class);
    }
}
