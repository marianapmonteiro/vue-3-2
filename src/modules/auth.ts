import { reactive, readonly } from 'vue';

interface AuthState {
    id: string,
    username: string,
    password: string,
    token: string,
}
interface AuthMutations {
    logout: () => boolean;
}
interface AuthActions {
    login: (username: string, password: string) => boolean;
}
interface useAuth {
    state: AuthState;
    mutations: AuthMutations;
    actions: AuthActions;
}

const state: AuthState = reactive({
    id: '',
    username: '',
    password: '',
    token: ''
});

const mutations = {
    login(id: string, username: string, token: string) {
        state.token = token;
        state.id = id;
        state.username = username;

        return true;
    },

    logout() {
        state.token = '';
        state.id = '';
        state.username = '';

        return true;
    }
};

const actions = {
    login(username: string, password: string) {
        console.log('login', username, password);

        mutations.login('id', username, 'superToken');

        return true;
    }
};

export default function useAuth(): Readonly<useAuth> {
    return readonly({
        state,
        mutations,
        actions
    });
}
