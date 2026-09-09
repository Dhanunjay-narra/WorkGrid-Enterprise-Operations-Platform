export function generateDmsVersionsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
