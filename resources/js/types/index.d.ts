export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    pat_member: number;
    confirmed: number;
    pat_member_confirmation: number;
    congress_confirmation: number;
    role: string;
    work: string;
}

export interface Abstract {
    id: number;
    title: string;
    user: User;
    media: string;
    created_at: Date;
    coauthor: string
    subtheme: number
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
