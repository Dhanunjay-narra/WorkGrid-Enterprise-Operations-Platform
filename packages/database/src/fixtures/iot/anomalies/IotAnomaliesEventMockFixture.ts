export function generateIotAnomaliesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
