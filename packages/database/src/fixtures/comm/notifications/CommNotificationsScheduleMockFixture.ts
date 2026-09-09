export function generateCommNotificationsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
