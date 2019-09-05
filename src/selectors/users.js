// Get visible users

export default (users, { userid }) => {
    return users.filter((user) => {
      const textMatch = user.userid === userid;
  
      return textMatch;
    }).sort((a, b) => {
      return a.content > b.content ? 1 : -1;
    });
  };