export function generateCommCallsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
