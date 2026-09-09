export function generateIotFleetMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
