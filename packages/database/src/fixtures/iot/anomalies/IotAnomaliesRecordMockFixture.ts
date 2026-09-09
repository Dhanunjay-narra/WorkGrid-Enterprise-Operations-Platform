export function generateIotAnomaliesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
