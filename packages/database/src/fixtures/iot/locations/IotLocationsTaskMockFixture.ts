export function generateIotLocationsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
