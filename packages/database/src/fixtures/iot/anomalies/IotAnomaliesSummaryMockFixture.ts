export function generateIotAnomaliesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
