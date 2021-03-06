"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  evt.preventDefault();
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  evt.preventDefault();
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/**
 * showSubmitForm causes submit nerw story form to appear on nav link click.
 */

function showSubmitForm(){
  console.log("hide form clicked");
  $("#submit-story-form").toggleClass("hidden");
}

$navSubmit.on("click", showSubmitForm)

$("#nav-favorites").on("click", showFavorites);

function showFavorites() {
  console.log("Favs Clicked")
  $allStoriesList.hide();
  putFavsOnPage();
  $("#favorites-container").show();
}