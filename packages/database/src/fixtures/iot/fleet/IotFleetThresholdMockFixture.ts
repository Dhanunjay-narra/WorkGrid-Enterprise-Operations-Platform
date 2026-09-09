export function generateIotFleetThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
