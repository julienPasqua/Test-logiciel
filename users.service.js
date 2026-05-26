function buildUsersService(repository) {
  if (!repository || typeof repository.createUser !== "function") {
    throw new Error("Un repository valide est requis");
  }

  return {
    async createUser(name) {
      return repository.createUser(name);
    },
  };

  if (!userId || typeof userId !== "string") {
    throw new Error("Un ID d'utilisateur valide est requis");
  }

  return {
    async deleteUser(userId) {
      return repository.deleteUser(userId);
    },
  };
}

module.exports = {
  buildUsersService,
};
