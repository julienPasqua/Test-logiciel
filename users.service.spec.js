const usersRepository = require("./users.repository");
const repositoryUsersMock = require("./repository.users.mock");

describe.each([
  ["users.repository", usersRepository],
  ["repository.users.mock", repositoryUsersMock],
])("%s", (_repositoryName, repository) => {
  const { createUser, resetUsers } = repository;

  beforeEach(() => {
    resetUsers();
  });

  test("création avec succès d'un utilisateur", async () => {
    const user = await createUser("testuser");

    expect(user).toEqual({ name: "testuser" });
  });

  test("création d'un utilisateur sans nom", async () => {
    await expect(createUser()).rejects.toThrow(
      "Le nom d'utilisateur est requis"
    );
  });

  test("création d'un utilisateur avec un nom déjà existant", async () => {
    await createUser("julien");

    await expect(createUser("julien")).rejects.toThrow(
      "Le nom d'utilisateur existe déjà"
    );
  });

  test("création d'un utilisateur avec un nom différent", async () => {
    await createUser("julien");

    const user = await createUser("julien2");

    expect(user).toEqual({ name: "julien2" });
  });

  test("création d'un utilisateur avec que des chiffres", async () => {
    const user = await createUser(12345);

    expect(user).toEqual({ name: 12345 });
  });

  test("création d'un utilisateur avec des caractères spéciaux", async () => {
    const user = await createUser("user!@#");

    expect(user).toEqual({ name: "user!@#" });
  });

  test("création d'un utilisateur avec un nom très long", async () => {
    const longName = "a".repeat(100);
    const user = await createUser(longName);

    expect(user).toEqual({ name: longName });
  });
});

describe("repository.users.mock", () => {
  const { createUser, deleteUser, resetUsers, setUsers } = repositoryUsersMock;

  beforeEach(() => {
    resetUsers();
  });

  test("supprime un utilisateur existant", async () => {
    setUsers([{ name: "julien" }, { name: "lea" }]);

    const deletedUser = await deleteUser("julien");

    expect(deletedUser).toEqual({ name: "julien" });
    await expect(createUser("julien")).resolves.toEqual({ name: "julien" });
  });

  test("rejette la suppression d'un utilisateur inexistant", async () => {
    await expect(deleteUser("inconnu")).rejects.toThrow(
      "Utilisateur non trouvé"
    );
  });
});
