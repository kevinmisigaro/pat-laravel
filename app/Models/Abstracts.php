<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Abstracts extends Model
{
    use HasFactory;

    protected $table = 'abstracts';

    protected $fillable = [
        'title', 'subtheme', 'media', 'user_id', 'coauthor'
    ];
}
