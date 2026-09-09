export function generateIotFleetEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
