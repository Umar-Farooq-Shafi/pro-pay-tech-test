<?php

namespace Database\Seeders;

use App\Models\User;
use Hash;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        User::factory()
            ->create([
                'email' => config('custom.emails.admin'),
                'password' => Hash::make('12345678'),
            ]);

        User::factory()
            ->times(10)
            ->create();
    }
}
