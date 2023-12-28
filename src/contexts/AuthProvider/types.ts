export interface IUser {
 user?: string
 token?: string
 refresh?: any
 refreshToken?: string
 jwtName?: string
 AllUsers?: boolean
 Contatos?: boolean
}

export interface IContext extends IUser {
 authenticate: (user: string, password: string) => Promise<void>
 logout: () => void
}

export interface IAuthProvider {
 children: JSX.Element
}
