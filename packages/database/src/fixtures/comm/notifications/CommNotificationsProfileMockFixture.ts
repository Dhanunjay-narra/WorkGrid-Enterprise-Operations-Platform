export function generateCommNotificationsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
