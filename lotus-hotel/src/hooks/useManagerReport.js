const useManagerReport = () => {
  const [reportData, setReportData] = useState(null);
  
  useEffect(() => {
    // Chỉ manager mới được fetch data này
    fetchFinancialReports().then(setReportData);
  }, []);

  return reportData;
};
