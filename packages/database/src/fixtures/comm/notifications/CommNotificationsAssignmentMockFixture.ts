export function generateCommNotificationsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
