export function generateHrShiftsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
