export function generateDmsVersionsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
