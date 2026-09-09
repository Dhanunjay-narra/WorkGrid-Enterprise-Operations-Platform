export function generateHrShiftsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
