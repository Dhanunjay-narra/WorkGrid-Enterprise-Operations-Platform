export function generateIntMappingsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
