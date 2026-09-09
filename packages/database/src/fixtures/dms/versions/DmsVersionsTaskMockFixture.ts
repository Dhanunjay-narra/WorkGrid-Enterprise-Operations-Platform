export function generateDmsVersionsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
