<?php

namespace App\Repositories\User\Eloquent;

use App\Models\User;
use App\Repositories\Base\Eloquent\BaseRepository;
use App\Repositories\User\UserRepositoryInterface;

/**
 * @Class UserRepository
 * @package App\Repositories\Eloquent
 */
class UserRepository extends BaseRepository implements UserRepositoryInterface
{
    /**
     * BaseRepository constructor.
     *
     * @param User $model
     */
    public function __construct(User $user)
    {
        parent::__construct($user);
    }
}
