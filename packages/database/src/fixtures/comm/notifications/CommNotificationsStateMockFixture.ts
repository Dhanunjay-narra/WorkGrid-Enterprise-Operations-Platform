export function generateCommNotificationsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
