export function generateCommNotificationsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
