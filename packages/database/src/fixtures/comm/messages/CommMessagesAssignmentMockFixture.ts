export function generateCommMessagesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
