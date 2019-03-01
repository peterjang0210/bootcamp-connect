# Bootcamp Connect

## API Routes Documentation

### Registration/Login Routes
- /api/users/registration
    - req.body: {
        username,
        password,
        cohortId
    }
    - stores username, hashed password, salt, and cohortId in User collection
    - responds with newly created user item

- /api/users/