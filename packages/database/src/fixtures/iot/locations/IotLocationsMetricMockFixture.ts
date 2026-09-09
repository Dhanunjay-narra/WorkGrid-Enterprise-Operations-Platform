export function generateIotLocationsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
