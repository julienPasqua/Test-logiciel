const users = [];

async function createUser(name) {
  if (!name) {
    throw new Error("Le nom d'utilisateur est requis");
  }

  const userAlreadyExists = users.find((user) => user.name === name);

  if (userAlreadyExists) {
    throw new Error("Le nom d'utilisateur existe déjà");
  }

  const user = { name };
  users.push(user);

  return user;
}

function resetUsers() {
  users.length = 0;
}



module.exports = {
  createUser,
  resetUsers,
};