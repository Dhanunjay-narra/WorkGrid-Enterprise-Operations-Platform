export function generateIotAnomaliesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
