import $ from 'jquery'
import { getCall } from './github';
import { mainContent, nameBanner } from './templates';

getCall().then(storeData)

function storeData (data) {
  var info = data;
  var userInfo = userData(info);
  $('.header').append(nameBanner(userInfo));
  $('.container').append(mainContent(userInfo));
}

function userData (user) {
  return {
    userName: user.name,
    userPicture: user.avatar_url,
    userBio: user.bio,
    userGithub: user.html_url,
    userEmail: user.email,
    userCompany: user.company,
    userRepos: user.repos_url
  }
}
