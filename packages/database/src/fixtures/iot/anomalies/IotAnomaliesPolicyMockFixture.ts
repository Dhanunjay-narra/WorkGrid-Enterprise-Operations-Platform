export function generateIotAnomaliesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
