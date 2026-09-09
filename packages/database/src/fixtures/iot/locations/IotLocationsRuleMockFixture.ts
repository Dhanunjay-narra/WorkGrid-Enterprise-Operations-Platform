export function generateIotLocationsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
