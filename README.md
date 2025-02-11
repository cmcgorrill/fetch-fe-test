
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Code Comments
Search any of these keywords in the codebase to find relevant inline comments.

- **PROBLEM** - Something went wrong that I couldn't get past, significantly impacted my ability to meet all requirements
- **TODO** - Key features I would add once any `PROBLEMS` have been resolved 
- **NICETOHAVE** - MVP+2, features I would want, but don't add enough value to spend time on it right now

## Issues
I encountered problems with the http-only cookie not being correctly attached to requests. The webpage can successfully hit the `auth/login` endpoint, but subsequent requests all failed with `401 Unauthorized`. 

I used the recommended parameters for including credentials, tried both fetch and axios, and spent about 30 minutes trying to find an alternate solution. I tried some hacks from StackOverflow, but most resources indicated it could be an issue with how the cookie is being set from the backend and how that might interact with the libraries I was using (Next.js, React). Since the requests worked fine in Postman, I instead grabbed a set of data and hardcoded it in. 

I was able to mimic pagination, but I skipped the sorting and filtering features in the hopes they could be worked through with a Fetch engineer. Instead, I used my time to work on a creative user experience.