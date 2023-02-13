<?php

namespace App\Http\Requests;

use App\Traits\LockedDemoUser;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserUpdateRequest extends FormRequest
{
    use LockedDemoUser;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'max:50'],
            'surname' => ['required', 'max:50'],
            'id_number' => ['required'],
            'mobile' => ['required'],
            'email' => ['required', 'max:50', 'email',
                Rule::unique('users')->ignore($this->route('user')->id)
            ],
            'password' => ['required'],
            'dob' => ['date_format:Y-m-d', 'before:today', 'nullable'],
            'language' => ['required'],
            'interests' => ['required'],
        ];
    }
}
