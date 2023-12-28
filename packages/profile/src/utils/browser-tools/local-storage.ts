export class LocalStorage {
  public static get = (key: string) => {
    const data = localStorage.getItem(key);
    if (!data) return null;
    try {
      return JSON.parse(data);
    } catch (error) {
      return null;
    }
  };

  public static set = (key: string, data: any) => {
    if (!data) return;
    let serialized = JSON.stringify(data);
    localStorage.setItem(key, serialized!);
  };
}
