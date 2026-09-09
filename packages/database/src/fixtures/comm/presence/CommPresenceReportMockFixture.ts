export function generateCommPresenceReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
