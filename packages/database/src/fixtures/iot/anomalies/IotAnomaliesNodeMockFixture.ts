export function generateIotAnomaliesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
