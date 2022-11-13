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

db.getSiblingDB("admin").createUser({
  user: "mongodb_query_exporter",
  pwd: "secret",
  roles: [
      { 
        role: "read", 
        db: "graussdocu" 
      }
  ]
})

db = new Mongo().getDB("graussdocu");

db.createCollection('status', { capped: false });