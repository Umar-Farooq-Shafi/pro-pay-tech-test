<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'max:50'],
            'surname' => ['nullable', 'max:50'],
            'id_number' => ['nullable'],
            'mobile' => ['nullable'],
            'email' => ['required', 'max:50', 'email', 'unique:users'],
            'dob' => ['nullable'],
            'language' => ['nullable'],
            'interests' => ['nullable'],
            'password' => ['nullable'],
        ];
    }
}
