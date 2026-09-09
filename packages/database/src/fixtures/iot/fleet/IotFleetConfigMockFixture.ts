export function generateIotFleetConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
