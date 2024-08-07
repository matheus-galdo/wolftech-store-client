import axios from "axios";
import { BASE_URL } from "./serviceAPIConfig";
import { SignInResponse } from "../types/Services/Auth";
import { SignInCredentials, SignUpInput } from "../types/credentials";
import { makeAuthHeaders } from "./helpers";

export function signIn(credentials: SignInCredentials) {
    return axios.post<SignInResponse>(`${BASE_URL}/login`, credentials);
}

export function signUp(payload: SignUpInput) {
    return axios.post(`${BASE_URL}/register`, payload);
}

export function logOut() {
    return axios.post(`${BASE_URL}/logout`, {}, makeAuthHeaders());
}
