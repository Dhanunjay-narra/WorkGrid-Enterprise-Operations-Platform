export function generateIotAnomaliesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
