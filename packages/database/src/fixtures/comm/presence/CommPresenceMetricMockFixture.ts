export function generateCommPresenceMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
