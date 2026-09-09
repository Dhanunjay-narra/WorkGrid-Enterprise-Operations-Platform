export function generateDmsVersionsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
