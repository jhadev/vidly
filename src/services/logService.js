import Raven from "raven-js";

function init() {
  Raven.config("https://e49fcef9466d41c6bfb6b9f0c9a4191d@sentry.io/1367179", {
    release: "1-0-0",
    environment: "development-test"
  }).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log
};
