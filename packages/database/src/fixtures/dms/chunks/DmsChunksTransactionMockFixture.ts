export function generateDmsChunksTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
