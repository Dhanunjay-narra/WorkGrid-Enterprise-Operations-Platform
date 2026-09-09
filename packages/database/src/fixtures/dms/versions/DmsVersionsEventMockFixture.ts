export function generateDmsVersionsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
