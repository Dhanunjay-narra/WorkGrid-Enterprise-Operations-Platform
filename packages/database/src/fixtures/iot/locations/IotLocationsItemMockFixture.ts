export function generateIotLocationsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
