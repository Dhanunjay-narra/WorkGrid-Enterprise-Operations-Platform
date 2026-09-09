export function generateIotAnomaliesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
