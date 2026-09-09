export function generateIotDevicesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_devices",
    entity: "IotDevicesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
