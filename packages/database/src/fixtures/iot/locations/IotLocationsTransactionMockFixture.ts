export function generateIotLocationsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_locations",
    entity: "IotLocationsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
