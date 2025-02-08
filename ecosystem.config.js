module.exports = {
  apps: [
    {
      name: 'scholarx-backend',
      script: 'dist/src/server.js',
      instances: 1,
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        DB_USER: process.env.DB_USER,
        DB_HOST: process.env.DB_HOST,
        DB_NAME: process.env.DB_NAME,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_PORT: process.env.DB_PORT || 5432,
        SERVER_PORT: process.env.SERVER_PORT || 4000,
        JWT_SECRET: process.env.JWT_SECRET,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        GOOGLE_REDIRECT_URL: process.env.GOOGLE_REDIRECT_URL,
        CLIENT_URL: process.env.CLIENT_URL,
        IMG_HOST: process.env.IMG_HOST,
        SMTP_MAIL: process.env.SMTP_MAIL,
        SMTP_PASSWORD: process.env.SMTP_PASSWORD,
        LINKEDIN_CLIENT_ID: process.env.LINKEDIN_CLIENT_ID,
        LINKEDIN_CLIENT_SECRET: process.env.LINKEDIN_CLIENT_SECRET,
        LINKEDIN_REDIRECT_URL: process.env.LINKEDIN_REDIRECT_URL
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy: {
    production: {
      user: 'SSH_USERNAME', // TODO
      host: 'SSH_HOSTMACHINE', // TODO
      ref: 'origin/main',
      repo: 'GIT_REPOSITORY', // TODO
      path: 'DESTINATION_PATH', // TODO
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && npm run build && npm run sync:db && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
}
