export function generateHrShiftsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
