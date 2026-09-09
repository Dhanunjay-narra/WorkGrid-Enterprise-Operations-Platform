export function generateCommNotificationsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
