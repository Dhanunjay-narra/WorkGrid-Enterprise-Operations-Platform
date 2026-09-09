export function generateIotAnomaliesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
