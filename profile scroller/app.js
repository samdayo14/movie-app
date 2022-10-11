const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    Image: "https://randomuser.me/api/portraits/men/82.jpg",
  },

  {
    name: "Jen smith",
    age: 26,
    gender: "female",
    lookingfor: "male",
    location: "Miami FL",
    Image: "https://randomuser.me/api/portraits/women/84.jpg",
  },

  {
    name: "william Johnson",
    age: 38,
    gender: "male",
    lookingfor: "female",
    location: "Lynn MA",
    Image: "https://randomuser.me/api/portraits/men/83.jpg",
  },
];

const profiles = profileiterator(data);
// call first person
nextProfile();

// Next event
document.getElementById("next").addEventListener("click", nextProfile);

// Next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
  <ul class="list-group">
  <li class="list-group-item">Name: ${currentProfile.name}</li>
  <li class="list-group-item">Age: ${currentProfile.age}</li>
  <li class="list-group-item">Location: ${currentProfile.location}</li>
  <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
  </ul>
  
  `;

    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.Image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// profile iterator
function profileiterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
