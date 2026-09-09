export function generateDmsSignaturesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
