
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {id: 1, dog_name: 'Fido',
                sex: 'male',
                fixed: true,
                weight: 35,
                breed: 'Beagle',
                age_number: 5,
                age_unit: 'years',
                play_style: 'cushy, explorer',
                play_notes: "Fido loves to play with everyone! He's never met a dog he didn't like!",
                fence_required: false,
                health_issues: false,
                bio: 'Fido is a super easy-going dog. He can play with anyone and loves just running around the dog park, smelling everything.',
                owner_id: 1},
        {id: 2, dog_name: 'Fifi',
                sex: 'female',
                fixed: true,
                weight: 70,
                breed: 'Standard Poodle',
                age_number: 3,
                age_unit: 'years',
                play_style: 'body slammer, speed demon',
                play_notes: "Fifi loves to run and play rough. She does best with larger dogs who like the same.",
                fence_required: true,
                health_issues: false,
                owner_id: 2},
        {id: 3, dog_name: 'Clancy',
                sex: 'male',
                fixed: true,
                weight: 35,
                breed: 'Corgi',
                age_number: 7,
                age_unit: 'years',
                play_style: 'cheerleader, tag',
                play_notes: "Clancy will sometimes nip at other dog's ankles while playing.",
                fence_required: false,
                health_issues: false,
                owner_id: 3},
        {id: 4, dog_name: 'Taco',
                sex: 'female',
                fixed: true,
                weight: 11,
                breed: 'Italian Greyhound/Chihuahua mix',
                age_number: 2,
                age_unit: 'years',
                play_style: 'speed demon, tag, wrestler',
                play_notes: "Taco loves to play with dogs of all sizes but can get overwhelmed if big dogs don't allow her to take breaks.",
                fence_required: false,
                health_issues: false,
                bio: "Taco is tiny but fierce!",
                owner_id: 4},
        {id: 5, dog_name: 'Kevin',
                sex: 'male',
                fixed: false,
                weight: 15,
                breed: 'Chinese Crested',
                age_number: 8,
                age_unit: 'years',
                play_style: 'explorer, shy',
                play_notes: "It takes Kevin a while to warm up, but he loves to play with other small dogs after he gets comfortable.",
                fence_required: false,
                health_issues: false,
                owner_id: 5},
        {id: 6, dog_name: 'Gloria',
                sex: 'female',
                fixed: true,
                weight: 50,
                breed: 'Husky',
                age_number: 9,
                age_unit: 'years',
                play_style: 'cushy, explorer, cheerleader',
                play_notes: "Gloria loves being around other dogs but generally does her own thing.",
                fence_required: false,
                health_issues: true,
                health_notes: "Gloria is on medication but has seizures sometimes.",
                owner_id: 1},
        {id: 7, dog_name: 'Roo',
                sex: 'female',
                fixed: false,
                weight: 55,
                breed: 'Vizsla',
                age_number: 4,
                age_unit: 'years',
                play_style: 'speed demon, cheerleader, tag',
                fence_required: true,
                health_issues: false,
                owner_id: 5},
        {id: 8, dog_name: 'Lola',
                sex: 'female',
                fixed: true,
                weight: 45,
                breed: 'Border Collie',
                age_number: 3,
                age_unit: 'years',
                play_style: 'cheerleader, tag, explorer',
                fence_required: false,
                health_issues: false,
                owner_id: 3},
        {id: 9, dog_name: 'Max',
                sex: 'male',
                fixed: true,
                weight: 14,
                breed: 'Maltese mix',
                age_number: 13,
                age_unit: 'years',
                play_style: 'explorer',
                play_notes: "Max is older, so he doesn't play much, but he still likes hanging out with other dogs.",
                fence_required: false,
                health_issues: true,
                health_notes: "Max has some arthritis, so he has to take it easy when playing with other dogs.",
                owner_id: 5}
      ]);
    });
};
