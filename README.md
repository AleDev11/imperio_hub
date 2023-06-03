## ImperioHub

To start up the project, the steps to be followed are as follows:

We create the .env and fill it with the following structure and information
```bash
DATABASE_URL=""
NEXTAUTH_JWT_SECRET=""
NEXTAUTH_SECRET=""

GITHUB_ID=""
GITHUB_SECRET=""

GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

Once the .env is created and the URL of the Mongodb DB is set we execute the following commands one by one in order to create the DB structure

```bash
npm run prisma generate
npx prisma db push
```

Install the dependencies 
```bash
npm install
```
Finally we run the project with the following command
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
