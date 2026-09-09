export function generateHrShiftsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
