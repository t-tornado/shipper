const ref = localStorage;

function get(key: string) {
  const data = ref.getItem(key);
  try {
    if (data) {
      return JSON.parse(data);
    }
  } catch (error: any) {
    return data;
  }
}

function set(key: string, payload: any) {
  let toSet = "";
  try {
    toSet = JSON.stringify(payload);
  } catch (error) {
    toSet = payload;
  }
  console.log(toSet, payload);
  ref.setItem(key, toSet);
}

export const LocalStorage = { ...ref, get, set };
