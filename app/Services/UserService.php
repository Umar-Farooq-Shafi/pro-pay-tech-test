<?php

namespace App\Services;

use App\Models\User;
use App\Repository\UserRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

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
    private UserRepositoryInterface $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function getUsers(Request $request): mixed
    {
        return $request
            ->user()
            ->orderByName()
            ->filter($request->only('search', 'role', 'trashed'))
            ->paginate()
            ->appends($request->all());
    }

    /**
     * @param mixed $validated
     * @return Model|null
     */
    public function createUser(mixed $validated): ?Model
    {
        return $this->userRepository->create($validated);
    }
}
