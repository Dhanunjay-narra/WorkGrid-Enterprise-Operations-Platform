export function generateCommMessagesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
