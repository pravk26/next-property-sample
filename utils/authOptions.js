import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })
    ],
    callbacks: {
        // Invoke on successfull sign in async
        async signIn({ profile }) {
            // 1.connect db
            //2.check user exists
            //if not then create user
            //return true to allow sign in
        },
        //session callback modify session object
        async session({ session }) {
            //get user from db
            //assign user id fromsession
            //return session
        }
    }
}