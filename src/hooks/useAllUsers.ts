// 全ユーザーを一覧を取得するカスタムフック
import { useState } from "react";
import { UserProfile } from "../types/userProfile";
import axios from "axios";
import { User } from "../types/api/user";

export const useAllUsers = () => {
        // userProfilesは、UserProfile型で、配列を扱う
        const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(false);

        const getUsers = () => {
                setLoading(true);
                setError(false);

                // apiからデータを取得する時は、User型で取得する
                axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users").then((res) => {
                        const data = res.data.map((user) => ({
                                id: user.id,
                                name: `${user.name}(${user.username})`,
                                email: user.email,
                                address: `${user.address.city}${user.address.suite}${user.address.street}`
                        }));
                        setUserProfiles(data);
                })
                .catch(() => {
                        setError(true);
                })
                .finally(() => {
                        setLoading(false);
                });
        };

        return { getUsers, userProfiles, loading, error };
};