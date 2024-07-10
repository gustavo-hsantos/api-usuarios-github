const user = {
  avatarUrl: "",
  name: "",
  bio: "",
  userName: "",
  followers: "",
  following: "",
  forks: "",
  stargazers: "",
  watchers: "",
  language: "",
  repositories: [],
  events: [],
  setInfo(gitHubUser) {
    this.avatarUrl = gitHubUser.avatar_url;
    this.name = gitHubUser.name;
    this.bio = gitHubUser.bio;
    this.username = gitHubUser.login;
    this.followers = gitHubUser.followers;
    this.following = gitHubUser.following;
    this.forks = gitHubUser.forks;
    this.stargazers = gitHubUser.stargazers_count;
    this.watchers = gitHubUser.watchers_count;
    this.language = gitHubUser.language;
  },
  setRepositories(repositories) {
    this.repositories = repositories;
  },

  setEvents(events) {
    this.events = events;
  },
};

export { user };
