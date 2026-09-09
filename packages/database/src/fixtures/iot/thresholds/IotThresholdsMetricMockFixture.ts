export function generateIotThresholdsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
