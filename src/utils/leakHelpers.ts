// Global array để thể hiện memory leak thông qua closure/global scope
export const leakedArray: any[] = [];

// Fix helper: Cho phép cleanup khi component unmount
export function resetLeakedArray() {
  leakedArray.length = 0;
}
