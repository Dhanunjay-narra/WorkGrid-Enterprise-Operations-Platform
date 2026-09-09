export function generateIotLocationsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
