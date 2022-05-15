<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Schedeules;

class Subject extends Model
{

    protected $guarded = array();


    protected $casts = [
        'set_of_criteria' => 'array'
    ];
    //////////////// one to one
    public function supervisor(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Supervisor::class, 'supervisor_id');
    }

    public function schedeule(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Schedeules::class);
    }

    /////////////////////////// one to many
    public function questions(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Question::class);
    }

    public function studentExam(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(StudentExam::class);
    }

    public function exam(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Exam::class);
    }

    public function examtemp(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ExamsTemp::class);
    }
    public function studentexams()
    {
        return $this->hasMany(StudentExam::class);
    }

    public function professors()
    {
        return $this->belongsToMany(Professor::class);
    }
    public function students()
    {
        return $this->belongsToMany(Student::class);
    }
    public function proctors()
    {
        return $this->belongsToMany(Proctor::class);
    }
}
