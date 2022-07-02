<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamsTemp extends Model
{
    protected $casts = [
        "modelquestions" => "array"
    ];
    public $timestamps = false;
    protected $fillable = ["*"];
    use HasFactory;
    public function subject()
    {
        return $this->belongsTo(Subject::class, 'subject_id');
    }
    public function questions()
    {
        $this->hasMany(Question::class);
    }
}
