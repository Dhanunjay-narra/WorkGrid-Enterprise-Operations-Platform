export function generateDmsRetentionTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
