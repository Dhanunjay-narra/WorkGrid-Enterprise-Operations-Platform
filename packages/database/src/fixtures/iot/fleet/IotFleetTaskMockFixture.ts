export function generateIotFleetTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
