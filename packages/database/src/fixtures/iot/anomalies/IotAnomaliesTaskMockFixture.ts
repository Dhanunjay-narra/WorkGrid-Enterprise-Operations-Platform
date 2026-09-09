export function generateIotAnomaliesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
