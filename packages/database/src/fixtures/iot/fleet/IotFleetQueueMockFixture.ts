export function generateIotFleetQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
