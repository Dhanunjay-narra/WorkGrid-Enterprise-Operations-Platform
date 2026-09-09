export function generateDmsRetentionMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
