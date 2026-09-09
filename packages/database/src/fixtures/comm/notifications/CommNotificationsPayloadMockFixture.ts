export function generateCommNotificationsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
