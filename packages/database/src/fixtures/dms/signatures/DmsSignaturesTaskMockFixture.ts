export function generateDmsSignaturesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
