export function calculateComplexBusinessLogic(data: any[]) {
  console.log('Tính toán phức tạp đã được tách riêng vào utils...');
  return data.map(item => ({ ...item, processed: true }));
}
