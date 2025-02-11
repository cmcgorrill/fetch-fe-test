
## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Stack

 - Next.js (used `create-next-app` to generate a boilerplate project)
 - React/Typescript
 - Radix UI component library

## Code Comments
Search any of these keywords in the codebase to find relevant inline comments.

- **PROBLEM** - Something went wrong that I couldn't get past, significantly impacted my ability to meet all requirements
- **TODO** - Key features I would add once any `PROBLEMS` have been resolved 
- **NICETOHAVE** - MVP+2, features I would want, but don't add enough value to spend time on it right now

## Issues
I encountered problems with the http-only cookie not being correctly attached to requests. The webpage can successfully hit the `auth/login` endpoint, but subsequent requests all failed with `401 Unauthorized`. 

I used the recommended parameters for including credentials, tried both fetch and axios, and spent about 30 minutes trying to find an alternate solution. I tried some hacks from StackOverflow, but most resources indicated it could be an issue with how the cookie is being set from the backend and how that might interact with the libraries I was using (Next.js, React). Since the requests worked fine in Postman, I instead grabbed a set of data and hardcoded it in. 

I was able to mimic pagination, but I skipped the sorting and filtering features in the hopes they could be worked through with a Fetch engineer. Since the various filtering and sorting capabilities weren't in scope for my version of this project, I fetched my data based on age in descending order. I did this to get a variety of breeds in the list, so the various length of names would be considered while making the UI components, and also because senior dogs simply don't get enough love.

## Notes
If I were to do this project again, I would take a very similar approach. The only decision I might rethink is my choice of component library. I chose Radix UI because it was the base for the design system I used in my last role, so it felt familiar and easy to work with. However it doesn't come with a pagination component, and so my pagination experience is more bare bones than I would typically like when building a UI like this.