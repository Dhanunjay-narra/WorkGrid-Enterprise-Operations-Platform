export function generateDmsRetentionQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
