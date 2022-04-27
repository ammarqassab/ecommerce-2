<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class category extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $fillable=['title','summary','category_image','status','disscount'];
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
