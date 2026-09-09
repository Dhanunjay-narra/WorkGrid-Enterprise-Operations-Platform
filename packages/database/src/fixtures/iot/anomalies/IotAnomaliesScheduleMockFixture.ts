export function generateIotAnomaliesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
