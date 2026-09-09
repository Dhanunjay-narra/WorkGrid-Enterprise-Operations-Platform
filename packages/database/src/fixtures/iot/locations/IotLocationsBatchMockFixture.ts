export function generateIotLocationsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
