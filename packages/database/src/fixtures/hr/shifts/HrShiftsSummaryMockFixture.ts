export function generateHrShiftsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
