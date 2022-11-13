db.createUser({
    user: 'grauss_user',
    pwd: 'grauss_pass',
    roles: [
      {
        role: 'readWrite',
        db: 'graussdocu',
      },
    ],
  });

db = new Mongo().getDB("graussdocu");

db.createCollection('status', { capped: false });