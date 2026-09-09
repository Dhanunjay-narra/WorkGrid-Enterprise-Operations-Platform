export function generateHrShiftsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
