export function generateDmsRetentionEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
