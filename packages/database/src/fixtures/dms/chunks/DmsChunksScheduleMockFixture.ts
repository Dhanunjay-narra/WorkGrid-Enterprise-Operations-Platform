export function generateDmsChunksScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
