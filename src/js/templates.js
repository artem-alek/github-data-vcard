import $ from 'jquery';

function nameBanner (user) {
  return `
    <div class="name-banner container1">${user.userName}</div>
    <div class="triangles container2 zigzag"></div>
  `
}

function mainContent (user) {
  return `
    <div class="columns">
      <div class="column is-one-third column1">
        <h1 class="header-titles">The Basics</h1>
        <ul>
          <li><span>Name:</span> ${user.userName}</li>
          <li><span>Github URL:</span> ${user.userGithub}</li>
          <li><span>Email:</span> ${user.userEmail}</li>
          <li><span>Company:</span> ${user.userCompany}</li>
          <li><span>Website:</span> ${user.userRepos}</li>
        </ul>
      </div>
      <div class="column is-one-third column2">
        <h1 class="header-titles">The Story</h1>
        <div class="content bio">${user.userBio} I always wanted to be a coder at a yound age but my parents always wanted me to become a doctor. I tried going to college for medical school but never enjoyed the medical science classes and did poorly on them. After 3 years of college, I finally had the courage to let my parents know that I do not wish to pursue a career in medical. Only couple years later after learning wordpress and freelancing that I decided to become a front-end developer!</div>

      </div>
      <div class="column is-one-quarter is-narrow column3">
        <figure class="image">
          <img class="user-image" src="${user.userPicture}"/>
        </figure>
      </div>
    </div>
  `
}

export { mainContent, nameBanner };
