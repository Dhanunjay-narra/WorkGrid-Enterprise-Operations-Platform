export function generateHrShiftsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
