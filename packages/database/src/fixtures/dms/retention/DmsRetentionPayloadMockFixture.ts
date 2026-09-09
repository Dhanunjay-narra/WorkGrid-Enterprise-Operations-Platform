export function generateDmsRetentionPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
