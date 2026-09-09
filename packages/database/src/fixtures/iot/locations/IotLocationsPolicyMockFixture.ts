export function generateIotLocationsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
