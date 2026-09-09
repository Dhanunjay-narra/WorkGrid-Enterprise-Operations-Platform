export function generateDmsChunksSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
