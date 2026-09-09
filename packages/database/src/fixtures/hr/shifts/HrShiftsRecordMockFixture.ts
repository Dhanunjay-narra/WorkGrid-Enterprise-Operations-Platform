export function generateHrShiftsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
