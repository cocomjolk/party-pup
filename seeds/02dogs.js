
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {dog_name: 'Fido',
                sex: 'male',
                fixed: true,
                weight: 35,
                breed: 'Beagle',
                age_number: 5,
                age_unit: 'years',
                play_style: JSON.stringify({
                  cushy: true,
                  explorer: true,
                  shy: false,
                  cheerleader: false,
                  speed: false,
                  tag: false,
                  wrestler: true,
                  boxer: false,
                  body_slammer: false
                }),
                play_notes: "Fido loves to play with everyone! He's never met a dog he didn't like!",
                fence_required: false,
                health_issues: false,
                dog_pic: 'https://s3.us-east-2.amazonaws.com/party-pup/beagle.jpg',
                bio: 'Fido is a super easy-going dog. He can play with anyone and loves just running around the dog park, smelling everything.',
                owner_id: 1},
        {dog_name: 'Fifi',
                sex: 'female',
                fixed: true,
                weight: 70,
                breed: 'Standard Poodle',
                age_number: 3,
                age_unit: 'years',
                play_style: JSON.stringify({
                  cushy: false,
                  explorer: false,
                  shy: false,
                  cheerleader: false,
                  speed: true,
                  tag: false,
                  wrestler: false,
                  boxer: false,
                  body_slammer: true
                }),
                play_notes: "Fifi loves to run and play rough. She does best with larger dogs who like the same.",
                fence_required: true,
                health_issues: false,
                dog_pic: 'https://s3.us-east-2.amazonaws.com/party-pup/poodle.jpg',
                owner_id: 2},
        {dog_name: 'Clancy',
                sex: 'male',
                fixed: true,
                weight: 35,
                breed: 'Corgi',
                age_number: 7,
                age_unit: 'years',
                play_style: JSON.stringify({
                  cushy: false,
                  explorer: false,
                  shy: false,
                  cheerleader: true,
                  speed: false,
                  tag: true,
                  wrestler: false,
                  boxer: false,
                  body_slammer: false
                }),
                play_notes: "Clancy will sometimes nip at other dog's ankles while playing.",
                fence_required: false,
                health_issues: false,
                dog_pic: 'https://s3.us-east-2.amazonaws.com/party-pup/corgi.jpg',
                owner_id: 3},
        {dog_name: 'Taco',
                sex: 'female',
                fixed: true,
                weight: 11,
                breed: 'Italian Greyhound/Chihuahua mix',
                age_number: 2,
                age_unit: 'years',
                play_style: JSON.stringify({
                  cushy: false,
                  explorer: false,
                  shy: false,
                  cheerleader: false,
                  speed: true,
                  tag: true,
                  wrestler: true,
                  boxer: false,
                  body_slammer: false
                }),
                play_notes: "Taco loves to play with dogs of all sizes but can get overwhelmed if big dogs don't allow her to take breaks.",
                fence_required: false,
                health_issues: false,
                dog_pic: 'https://s3.us-east-2.amazonaws.com/party-pup/taco.jpg',
                bio: "Taco is tiny but fierce!",
                owner_id: 4},
        {dog_name: 'Kevin',
                sex: 'male',
                fixed: false,
                weight: 15,
                breed: 'Chinese Crested',
                age_number: 8,
                age_unit: 'years',
                play_style: JSON.stringify({
                  cushy: false,
                  explorer: true,
                  shy: true,
                  cheerleader: false,
                  speed: false,
                  tag: false,
                  wrestler: false,
                  boxer: false,
                  body_slammer: false
                }),
                play_notes: "It takes Kevin a while to warm up, but he loves to play with other small dogs after he gets comfortable.",
                fence_required: false,
                health_issues: false,
                dog_pic: 'https://s3.us-east-2.amazonaws.com/party-pup/crested.jpg',
                owner_id: 5},
        {dog_name: 'Gloria',
                sex: 'female',
                fixed: true,
                weight: 50,
                breed: 'Husky',
                age_number: 9,
                age_unit: 'years',
                play_style: JSON.stringify({
                  cushy: true,
                  explorer: true,
                  shy: false,
                  cheerleader: true,
                  speed: false,
                  tag: false,
                  wrestler: false,
                  boxer: false,
                  body_slammer: false
                }),
                play_notes: "Gloria loves being around other dogs but generally does her own thing.",
                fence_required: false,
                health_issues: true,
                health_notes: "Gloria is on medication but has seizures sometimes.",
                dog_pic: 'https://s3.us-east-2.amazonaws.com/party-pup/husky.jpg',
                owner_id: 1},
        {dog_name: 'Roo',
                sex: 'female',
                fixed: false,
                weight: 55,
                breed: 'Vizsla',
                age_number: 4,
                age_unit: 'years',
                play_style: JSON.stringify({
                  cushy: false,
                  explorer: false,
                  shy: false,
                  cheerleader: true,
                  speed: true,
                  tag: true,
                  wrestler: false,
                  boxer: false,
                  body_slammer: false
                }),
                fence_required: true,
                health_issues: false,
                dog_pic: 'https://s3.us-east-2.amazonaws.com/party-pup/Vizsla_hero2.jpg',
                owner_id: 5},
        {dog_name: 'Lola',
                sex: 'female',
                fixed: true,
                weight: 45,
                breed: 'Border Collie',
                age_number: 3,
                age_unit: 'years',
                play_style: JSON.stringify({
                  cushy: false,
                  explorer: true,
                  shy: false,
                  cheerleader: true,
                  speed: false,
                  tag: true,
                  wrestler: false,
                  boxer: false,
                  body_slammer: false
                }),
                fence_required: false,
                health_issues: false,
                dog_pic: 'https://s3.us-east-2.amazonaws.com/party-pup/bordercollie.jpg',
                owner_id: 3},
        {dog_name: 'Max',
                sex: 'male',
                fixed: true,
                weight: 14,
                breed: 'Maltese mix',
                age_number: 13,
                age_unit: 'years',
                play_style: JSON.stringify({
                  cushy: false,
                  explorer: true,
                  shy: false,
                  cheerleader: false,
                  speed: false,
                  tag: false,
                  wrestler: false,
                  boxer: false,
                  body_slammer: false
                }),
                play_notes: "Max is older, so he doesn't play much, but he still likes hanging out with other dogs.",
                fence_required: false,
                health_issues: true,
                health_notes: "Max has some arthritis, so he has to take it easy when playing with other dogs.",
                dog_pic: 'https://s3.us-east-2.amazonaws.com/party-pup/malteagle.jpg',
                owner_id: 5}
      ]);
    });
};
