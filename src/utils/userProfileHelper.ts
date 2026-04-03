export function fetchUserProfileData(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'John Doe', role: 'Admin', status: 'Active' });
    }, 1000);
  });
}
