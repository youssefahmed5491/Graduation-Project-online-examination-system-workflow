<?php

namespace Database\Seeders;

use App\Models\Supervisor;
use Illuminate\Database\Seeder;
use App\Models\Subject;

class SubjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subject1 = new Subject([
            "title" => "Math",
            'uid' => 'M101',
            'set_of_criteria' => ['1', '2', '3'],
        ]);
        Supervisor::find(1)->subject()->save($subject1);

        $subject2 = new Subject([
            "title" => "Mechanics",
            'uid' => 'Mech101',
            'set_of_criteria' => ['4', '5', '6']
        ]);

        Supervisor::find(2)->subject()->save($subject2);
    }
}
