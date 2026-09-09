export function generateCommNotificationsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
