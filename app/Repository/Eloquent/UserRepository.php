<?php

namespace App\Repository\Eloquent;

use App\Models\User;
use App\Repository\UserRepositoryInterface;
use Illuminate\Database\Eloquent\Model;

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
