db.createUser({
    user: 'grauss_user',
    pwd: 'grauss_pass',
    roles: [
      {
        role: 'dbOwner',
        db: 'graussdocu',
      },
    ],
  });