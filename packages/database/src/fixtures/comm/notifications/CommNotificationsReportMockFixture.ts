export function generateCommNotificationsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
