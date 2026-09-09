export function generateHrLeaveReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
