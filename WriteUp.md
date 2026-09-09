# Write-up

> This is the skeleton - replace everything in blockquotes with your own words
> and delete the prompts as you go. Aim for **~300 words** across the four
> questions; the route reference below can be as long as it needs to be.
>
> Write it like you're handing the work to a teammate. We'd rather read an
> honest "I ran out of time on X and here's what I'd do" than a polished list of
> accomplishments. **Submit this even if you didn't finish** - see CHALLENGE.md.

## 1. What did you build for Part B, and why that?

> For Part B, I decided to focus on the UI. Since I am new to using Next.js, I spent a lot of time learning how things worked leaving me little time to focus on Part B. Since I had such a small amount of time, I decided to focus on learning how to build a button/toggle function since they are one of the most used functions in applications.

## 2. What did you decide, and what did you rule out?

> I decided to focus on UI since that was what I felt most comfortable with. I deliberately did not choose route shapes since  I am unfamiliar with them and it would take a some time for me to build a working one from scratch. 

## 3. Where did you cut corners?

> With more time, I would have kept the address and cuisine showing, and would have the visit information appear upon clicking on the box of each restaurant. I decided to make the address and cuisine show upon expansion to show that it functions since I did not have enough time to make a route for the visit information. 

---

## Part B: routes

## Schema changes

> none

## How I verified this

> How you checked your work - the happy paths _and_ the failures. `curl`
> commands, a Postman collection, a scratch script, screenshots: whatever you
> actually used. Paste the commands.
>
> This is much faster for us to review than working it out ourselves, and it's
> how you show you checked the edge cases.

**Part A** - the contract table in CHALLENGE.md, every row including the error
cases:

```bash
# e.g.
curl -i http://localhost:3000/api/restaurants          # 200 + array
<img width="1156" height="482" alt="image" src="https://github.com/user-attachments/assets/fd4b7755-b84b-4380-b061-949cd21fb0ec" />

curl -i http://localhost:3000/api/restaurants/99999    # 404
<img width="1358" height="292" alt="image" src="https://github.com/user-attachments/assets/3ee2763b-2396-4b37-baea-9f9b92f04463" />

curl -i http://localhost:3000/api/restaurants/abc      # 404
<img width="1146" height="314" alt="image" src="https://github.com/user-attachments/assets/fc21978e-e87e-4334-bf5b-98d1891d5fd7" />

curl -i -X POST http://localhost:3000/api/restaurants \
  -H 'Content-Type: application/json' \
  -d '{"name":"Out Of Range","rating":6}'              # 400
<img width="1484" height="370" alt="image" src="https://github.com/user-attachments/assets/6ef47d34-ec40-4e4c-b322-a3f02c174567" />
```

**Part B** - the equivalent cases for what you built:

```bash

```

## Known issues / what I'd do next

> I did not finish Part A3. With more time I would like to finish it. Since Next.js is new to me, I took a lot of time learning about it to understand how routes, front-end and back-end all work together. I focused on building a strong A1, A2, and attempting Part B. My A1 and A2 took me the most time since I was focused on learning JSX, Next.js, and how front-end and back-end worked together. I wanted to challenge myself by attempting Part B and I was happy that I was able to build an element that works and doesn't break my code.  
