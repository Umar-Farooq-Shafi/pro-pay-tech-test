<?php

namespace App\Services;

use App\Repository\UserRepositoryInterface;

/**
 * Class UserService
 * @package App\Services
 */
class UserService
{
    /**
     * UserRepositoryInterface depend injection.
     *
     * @var UserRepositoryInterface
     */
    private $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function login(array $all)
    {
        return true;
    }
}
