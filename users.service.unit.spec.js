const { buildUsersService } = require("./users.service");

describe("users.service", () => {
  test("délègue la création au repository avec le bon argument", async () => {
    const repository = {
      createUser: jest.fn().mockResolvedValue({ name: "julien", id: "1234" }),
    };
    const usersService = buildUsersService(repository);

    const user = await usersService.createUser("julien");

    expect(user).toEqual({ name: "julien", id: "1234" });
    expect(repository.createUser).toHaveBeenCalledWith("julien");
    expect(repository.createUser).toHaveBeenCalledTimes(1);
  });

  test("propage l'erreur du repository", async () => {
    const repository = {
      createUser: jest
        .fn()
        .mockRejectedValue(new Error("Le nom d'utilisateur existe déjà")),
    };
    const usersService = buildUsersService(repository);

    await expect(usersService.createUser("julien")).rejects.toThrow(
      "Le nom d'utilisateur existe déjà"
    );
    expect(repository.createUser).toHaveBeenCalledWith("julien");
    expect(repository.createUser).toHaveBeenCalledTimes(1);
  });

  test("rejette un repository invalide", () => {
    expect(() => buildUsersService()).toThrow("Un repository valide est requis");
  });


  test("rejette un repository sans donnée de création d'utilisateur", () => {
    expect(() => buildUsersService({})).toThrow("Un repository valide est requis");
  });
});
