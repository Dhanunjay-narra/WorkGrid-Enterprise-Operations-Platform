export function generateDmsVersionsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
