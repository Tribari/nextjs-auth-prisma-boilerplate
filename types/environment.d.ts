namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
        DATABASE_URL: string
        EMAIL_SERVER_USER: string
        EMAIL_SERVER_PASSWORD: string
        EMAIL_SERVER_HOST: string
        EMAIL_SERVER_PORT: string
        EMAIL_FROM: string
        GITHUB_CLIENT_ID: string
        GITHUB_CLIENT_SECRET: string
        NEXTAUTH_URL: string
        SECRET: string
    }
  }