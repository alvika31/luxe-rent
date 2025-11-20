<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mobil extends Model
{
    protected $fillable = ['nama', 'image', 'deskripsi', 'support_harian', 'support_bulanan', 'support_mingguan', 'is_active', 'harga'];
}
