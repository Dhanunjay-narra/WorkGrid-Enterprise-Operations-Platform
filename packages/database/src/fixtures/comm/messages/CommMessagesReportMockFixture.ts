export function generateCommMessagesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
