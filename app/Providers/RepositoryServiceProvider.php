<?php

namespace App\Providers;

use App\Repositories\Base\BaseRepositoryInterface;
use App\Repositories\Base\Eloquent\BaseRepository;
use App\Repositories\User\Eloquent\UserRepository;
use App\Repositories\User\UserRepositoryInterface;
use Inertia\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register(): void
    {
        $this->app->bind(BaseRepositoryInterface::class, BaseRepository::class);
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot(): void
    {
        //
    }
}
