<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserDeleteRequest;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * @var UserService
     */
    private UserService $userService;

    /**
     * Create a new controller instance.
     *
     * @param UserService $userService
     */
    public function __construct(UserService $userService) {
        $this->userService = $userService;
    }

    /**
     * @return Response
     */
    public function index(Request $request): Response
    {
        $users = $this->userService->getUsers($request);

        return Inertia::render('Home', [
            'filters' => $request->all('search', 'role', 'trashed'),
            'users' => $users,
        ]);
    }

    /**
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Create');
    }

    /**
     * @param UserStoreRequest $request
     * @return RedirectResponse
     */
    public function store(UserStoreRequest $request): RedirectResponse
    {
        $this->userService->createUser(array_merge(
            $request->except('interests'),
            [
                'interests' => "[" . implode(", ", $request->get('interests')) . "]"
            ]
        ));

        return Redirect::route('users')->with('success', 'User created.');
    }

    /**
     * @param User $user
     * @return Response
     */
    public function edit(User $user): Response
    {
        return Inertia::render('Edit', [
            'user' => new UserResource($user),
        ]);
    }

    /**
     * @param User $user
     * @param UserUpdateRequest $request
     * @return RedirectResponse
     */
    public function update(User $user, UserUpdateRequest $request): RedirectResponse
    {
        $user->update(
            $request->validated()
        );

        return Redirect::back()->with('success', 'User updated.');
    }

    /**
     * @param User $user
     * @param UserDeleteRequest $request
     * @return RedirectResponse
     */
    public function destroy(User $user, UserDeleteRequest $request): RedirectResponse
    {
        $user->delete();

        return Redirect::back()->with('success', 'User deleted.');
    }

}
