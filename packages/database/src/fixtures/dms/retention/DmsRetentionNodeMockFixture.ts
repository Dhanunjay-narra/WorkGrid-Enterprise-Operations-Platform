export function generateDmsRetentionNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
