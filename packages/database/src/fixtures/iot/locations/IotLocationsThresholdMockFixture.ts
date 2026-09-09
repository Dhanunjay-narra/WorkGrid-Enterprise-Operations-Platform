export function generateIotLocationsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
