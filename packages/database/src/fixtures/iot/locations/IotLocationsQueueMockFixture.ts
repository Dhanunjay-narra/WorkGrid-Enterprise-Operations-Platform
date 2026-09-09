export function generateIotLocationsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
