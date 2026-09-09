export function generateIotAnomaliesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
