db.createUser({
  user: "local_user",
  pwd: "Password123",
  roles: [
    {
      role: "readWrite",
      db: "profileDB",
    },
  ],
});