export function generateDmsVersionsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
