<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('abstracts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->foreignIdFor(User::class);
            $table->string("subtheme");
            $table->string('media');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('abstracts');
    }
};
