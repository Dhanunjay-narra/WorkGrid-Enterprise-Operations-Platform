export function generateIotFleetScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
