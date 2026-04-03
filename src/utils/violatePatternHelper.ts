export async function fetchAndProcessUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return data.map((u: any) => ({
      ...u,
      customField: u.name.toUpperCase() + ' - ' + Math.random().toString(36).substr(2, 5),
      isVip: u.id % 2 === 0,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
