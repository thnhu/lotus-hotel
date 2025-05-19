const StaffRoutes = () => (
  <ProtectedRoute allowedRoles={['staff']}>
    <StaffLayout>
      <Routes>
        <Route path="/checkins" element={<CheckinManage />} />
        <Route path="/room-status" element={<RoomStatus />} />
      </Routes>
    </StaffLayout>
  </ProtectedRoute>
);
