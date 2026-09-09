export function generateHrShiftsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
