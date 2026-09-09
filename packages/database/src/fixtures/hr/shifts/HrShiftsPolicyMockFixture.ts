export function generateHrShiftsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
