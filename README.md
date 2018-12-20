# README

Todo App that uses Next.js React app on frontend and Rails 5.2 API as backend.

## Setup

```bash
git clone
cd todo_next_rails
gem install foreman
cd rails && rails db:migrate
cd .. && foreman start -f Procfile.dev
```

## App boot

From root, start up nextjs on localhost:3000 and rails at localhost:5000

`foreman start -f Procfile.dev`
