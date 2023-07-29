import { useState, useEffect } from "react";
import { userInfo } from "../Redux/Features/Auth/authService";
import { useAppDispatch, useAppSelector } from "../Redux/App/hooks";
import { authSelector } from "../Redux/Features/Auth/authSlice";

const useAuth = () => {

    const { token, user } = useAppSelector(authSelector)
    const dispatch = useAppDispatch()


    useEffect(() => {
        if (token) {
            dispatch(userInfo())
        }
    }, [token, dispatch])

    return [token, user];
};

export default useAuth;