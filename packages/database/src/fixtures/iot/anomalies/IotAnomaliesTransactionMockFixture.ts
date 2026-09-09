export function generateIotAnomaliesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
