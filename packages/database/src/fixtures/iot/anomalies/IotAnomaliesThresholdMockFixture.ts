export function generateIotAnomaliesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
