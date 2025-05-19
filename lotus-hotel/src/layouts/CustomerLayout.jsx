const CustomerLayout = ({ children }) => (
  <div>
    <CustomerHeader />  {/* Header riêng cho khách hàng */}
    <CustomerSidebar /> {/* Menu điều hướng */}
    <main>{children}</main>
    <CustomerFooter /> {/* Footer riêng */}
  </div>
);
