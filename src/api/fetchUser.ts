export const fetchUser = async () => {
  try {
    const response = await fetch(
      "https://api.lettobet.dev.bet4skill.com/api/auth/me",
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          // "Cache-Control": "no-cache",
          "Accept-Language": "en-RU,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,he;q=0.6",
          'Connection': 'keep-alive',
        },
        credentials: "include",
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Failed to fetch user");
    }
  } catch (error) {
    console.error("Error fetching user");
  }
};
