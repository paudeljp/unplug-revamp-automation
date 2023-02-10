import { faker } from "@faker-js/faker";

export function fakerObj(dataPath, string) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return console.error(err);
    }
  })
    .then((datas) => {
      for (let index = 0; index < datas.length; index++) {
        if (datas.data[index].environment == string) {
          datas.data[index].name = Date.now() + " role";
          datas.data[index].home = "home";
          datas.data[index].analytics = "analytics";
          datas.data[index].users = "users";
          datas.data[index].admins = "admins";
          datas.data[index].features = "features";
          datas.data[index].featured_playlists = "featured-playlists";
          datas.data[index].featured_pick = "featured-pick";
          datas.data[index].promos = "promos";
          datas.data[index].feelings = "feelings";
          datas.data[index].journals = "journals";
          datas.data[index].billing_plans = "billing-plans";
          datas.data[index].videos = "videos";
          datas.data[index].timer_sound = "timer-sounds";
          datas.data[index].audio_tracks = "audio-tracks";
          datas.data[index].newseletter = "newsletter";
          cy.writeFile(dataPath, datas);
        }
      }
    })
    .wait(1000);
}

export function storeObj(dataPath, string) {
  cy.checkAndReadFile(dataPath, (err, datas) => {
    if (err) {
      return console.error(err);
    }
  })
    .then((datas) => {
      for (let index = 0; index < datas.length; index++) {
        if (datas.data[index].environment == string) {
          datas.data[index].name = datas.data[0].name;
          datas.data[index].home = datas.data[0].home;
          datas.data[index].analytics = datas.data[0].analytics;
          datas.data[index].users = datas.data[0].users;
          datas.data[index].admins = datas.data[0].admins;
          datas.data[index].features = datas.data[o].features;
          datas.data[index].featured_playlists =
            datas.data[0].featured_playlists;
          datas.data[index].featured_pick = datas.data[0].featured_pick;
          datas.data[index].promos = datas.data[0].promos;
          datas.data[index].feelings = datas.data[0].feelings;
          datas.data[index].journals = datas.data[0].journals;
          datas.data[index].billing_plans = datas.data[0].billing_plans;
          datas.data[index].videos = datas.data[0].videos;
          datas.data[index].timer_sound = datas.data[0].timer_sound;
          datas.data[index].audio_tracks = datas.data[0].audio_tracks;
          datas.data[index].newseletter = datas.data[0].newseletter;
          cy.writeFile(dataPath, datas);
        }
      }
    })
    .wait(1000);
}
