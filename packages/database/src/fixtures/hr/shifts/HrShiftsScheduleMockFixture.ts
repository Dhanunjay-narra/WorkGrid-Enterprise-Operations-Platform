export function generateHrShiftsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
