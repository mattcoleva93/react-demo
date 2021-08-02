const githubQuery = (login: string) => {
  return {
    query: `
      { 
        user(login:"${login}"){
          repositories(first:10){
            nodes{
              name
            }
          }
        }
      }
      `
  };
};

export default githubQuery;