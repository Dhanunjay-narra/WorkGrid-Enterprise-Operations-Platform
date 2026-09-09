export function generateIotAnomaliesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
