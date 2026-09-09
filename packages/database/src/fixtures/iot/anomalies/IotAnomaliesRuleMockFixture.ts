export function generateIotAnomaliesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
