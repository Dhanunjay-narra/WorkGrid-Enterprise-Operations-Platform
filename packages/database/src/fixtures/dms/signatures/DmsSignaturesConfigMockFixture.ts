export function generateDmsSignaturesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
