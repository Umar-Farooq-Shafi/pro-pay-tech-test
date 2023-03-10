<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;
use \Illuminate\Contracts\Validation\Validator as Validation;

class LoginController extends Controller
{

    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected string $redirectTo = RouteServiceProvider::HOME;

    /**
     * @var string
     */
    private string $username;

    /**
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function index(Request $request): Response|RedirectResponse
    {
        if ($request->isMethod('post')) {
            $validator = $this->validator($request->all());

            if ($validator->fails()) {
                return redirect()->back()
                    ->withErrors($validator->errors())
                    ->withInput($request->except('password'));
            }

            if (Auth::attempt($request->except('remember'), $request->get('remember'))) {
                return redirect()
                    ->route('users')
                    ->with('success', 'Login Successfully...');
            } else {
                return redirect()->back()
                    ->with('error', 'Unauthorized');
            }
        }

        return Inertia::render('Auth/Login');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data): Validation
    {
        return Validator::make($data, [
            'email'         => ['required'],
            'password'      => ['required'],
        ]);
    }
}
