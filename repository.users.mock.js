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

function setUsers(fakeUsers) {
  users.length = 0;
  users.push(...fakeUsers);
}

function resetUsers() {
  users.length = 0;
}

async function deleteUser(name) {
  const userIndex = users.findIndex((user) => user.name === name);

  if (userIndex === -1) {
    throw new Error("Utilisateur non trouvé");
  }

  const [deletedUser] = users.splice(userIndex, 1);
  return deletedUser;
}

module.exports = {
  createUser,
  resetUsers,
  setUsers,
  deleteUser,
};
