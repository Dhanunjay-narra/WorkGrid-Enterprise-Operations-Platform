export function generateIotFleetItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
