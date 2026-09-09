export function generateDmsSignaturesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
