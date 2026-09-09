export function generateDmsChunksMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
