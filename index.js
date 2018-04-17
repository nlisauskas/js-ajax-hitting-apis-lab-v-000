const rootURL = "https://api.github.com"

function getRepositories() {
  const name = document.getElementById("username").value
  const req = new XMLHttpRequest()
  req.addEventListener, displayRepositories);
  req.open("GET", rootURL + "/users/" + name + "/repos")
  req.send()
  return false
}

function displayRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
  const repoList = "<ul>" + repose.map( repo => {
    const dataUserName = 'data-username="' + repo.owner.login + '""'
    const dataRepoName = 'data-repository="' + repo.name + '""'
  })
}
}
