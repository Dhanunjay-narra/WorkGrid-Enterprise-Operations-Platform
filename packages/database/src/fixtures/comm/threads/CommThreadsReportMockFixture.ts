export function generateCommThreadsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
