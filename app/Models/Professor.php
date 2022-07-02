<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Professor extends Model
{
    use HasFactory;


    protected $fillable = ['*'];


    public function subjects(): BelongsToMany
    {
        return $this->belongsToMany(Subject::class);
    }
    public function questions()
    {
        return $this->hasManyThrough(Subject::class, Question::class);
    }
}
