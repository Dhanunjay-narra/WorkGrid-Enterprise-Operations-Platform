export function generateIotFleetTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_fleet",
    entity: "IotFleetTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
