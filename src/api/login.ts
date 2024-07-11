export const handleLogin = async (login: string, password: string) => {
  try {
    const response = await fetch(
      "https://api.lettobet.dev.bet4skill.com/api/client-login",
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
        credentials: "include",
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("Login successful", data);
      return data;
    } else {
      console.error("Login failed");
    }

    return response;
  } catch (error) {
    console.error("Error during login", error);
  }
};
