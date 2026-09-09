export function generateIotAnomaliesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
