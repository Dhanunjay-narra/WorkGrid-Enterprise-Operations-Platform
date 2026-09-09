export function generateDmsChunksReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
