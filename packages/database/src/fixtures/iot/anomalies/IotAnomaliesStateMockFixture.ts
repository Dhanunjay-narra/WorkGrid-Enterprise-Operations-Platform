export function generateIotAnomaliesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
