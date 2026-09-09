export function generateHrLeaveSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
