export function generateCommMessagesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
