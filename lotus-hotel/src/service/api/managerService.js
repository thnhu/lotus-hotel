export const fetchFinancialReports = async () => {
  // Gọi API chỉ quản lý có quyền
  const response = await axios.get('/api/manager/financial-reports');
  return response.data;
};
