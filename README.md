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

## Preview images

![image](https://github.com/AleDev11/imperio_hub/assets/91348432/5a7e46f4-dc7b-4d6f-b92f-407a9427509f)
![image](https://github.com/AleDev11/imperio_hub/assets/91348432/4b00fbaa-0d54-412c-9a98-a47ec2644b66)
![image](https://github.com/AleDev11/imperio_hub/assets/91348432/60d84a53-569e-4261-a98c-a14c404d603c)
![image](https://github.com/AleDev11/imperio_hub/assets/91348432/a2c35e5c-59c8-48b0-aae5-17d72aa482e2)
![image](https://github.com/AleDev11/imperio_hub/assets/91348432/8274ff30-0691-4aee-8f6c-dac94ec31a37)
