<?php

namespace App\Services;

use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use App\Repositories\User\UserRepositoryInterface;
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

    /**
     * @param User $user
     * @param UserUpdateRequest $request
     * @return void
     */
    public function updateUser(User $user, UserUpdateRequest $request): void
    {
        $user->update(
            $request->validated()
        );
    }

    /**
     * @param User $user
     * @return void
     */
    public function deleteUser(User $user): void
    {
        $user->delete();
    }
}
