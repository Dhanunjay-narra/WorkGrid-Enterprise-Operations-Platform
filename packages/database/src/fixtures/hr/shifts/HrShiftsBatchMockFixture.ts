export function generateHrShiftsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
