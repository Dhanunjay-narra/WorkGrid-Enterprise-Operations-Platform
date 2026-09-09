export function generateIotAnomaliesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_anomalies",
    entity: "IotAnomaliesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
