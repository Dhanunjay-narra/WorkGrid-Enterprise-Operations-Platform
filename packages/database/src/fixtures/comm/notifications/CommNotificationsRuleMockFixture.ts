export function generateCommNotificationsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
