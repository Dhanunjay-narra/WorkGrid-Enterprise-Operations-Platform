export function generateIotAnomaliesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
