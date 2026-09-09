export function generateHrShiftsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
