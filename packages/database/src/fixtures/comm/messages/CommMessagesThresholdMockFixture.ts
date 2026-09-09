export function generateCommMessagesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
