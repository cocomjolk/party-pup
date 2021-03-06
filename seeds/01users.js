
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'loveMyDog77',
                first_name: 'Jane',
                last_name: 'Smith',
                street_address: '119 Nueces St',
                city: 'Austin',
                state: 'TX',
                zip: '78701',
                gender: 'female',
                user_pic: 'https://s3.us-east-2.amazonaws.com/party-pup/lovemydog77.jpg',
                hash: '$2a$12$T0IqfaOKFP6jG7le24skOOxZBTJMopvzvwMr0Y3NbWQsdraQE8P1G'},
        {username: 'Fifi4Ever',
                first_name: 'John',
                last_name: 'Johnson',
                street_address: '8820 Burnet Rd',
                city: 'Austin',
                state: 'TX',
                zip: '78757',
                gender: 'male',
                user_pic: 'https://s3.us-east-2.amazonaws.com/party-pup/pookie4ever.jpg',
                hash: '$2a$12$T0IqfaOKFP6jG7le24skOOxZBTJMopvzvwMr0Y3NbWQsdraQE8P1G'},
        {username: 'dogzRuleCatzDrool',
                first_name: 'Tom',
                last_name: 'Jones',
                street_address: '2402 Guadalupe St',
                city: 'Austin',
                state: 'TX',
                zip: '78705',
                gender: 'male',
                user_pic: 'https://s3.us-east-2.amazonaws.com/party-pup/dogzrulecatzdrool.jpeg',
                hash: '$2a$12$T0IqfaOKFP6jG7le24skOOxZBTJMopvzvwMr0Y3NbWQsdraQE8P1G'},
        {username: 'mandafae',
                first_name: 'Amanda',
                last_name: 'Freeman',
                street_address: '8820 Burnet Rd',
                city: 'Austin',
                state: 'TX',
                zip: '78757',
                gender: 'female',
                user_pic: 'https://s3.us-east-2.amazonaws.com/party-pup/profile.jpg',
                hash: '$2a$12$T0IqfaOKFP6jG7le24skOOxZBTJMopvzvwMr0Y3NbWQsdraQE8P1G',
                FB_id: '10156160062123413',
                google_id: '117063124051141470842'},
        {username: 'puppyLove824',
                first_name: 'Lisa',
                last_name: 'Palmer',
                street_address: '119 Nueces St',
                city: 'Austin',
                state: 'TX',
                zip: '78701',
                gender: 'female',
                user_pic: 'https://s3.us-east-2.amazonaws.com/party-pup/puppylove824.jpeg',
                hash: '$2a$12$T0IqfaOKFP6jG7le24skOOxZBTJMopvzvwMr0Y3NbWQsdraQE8P1G'}
      ]);
    });
};
