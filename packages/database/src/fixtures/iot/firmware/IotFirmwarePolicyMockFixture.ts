export function generateIotFirmwarePolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_firmware",
    entity: "IotFirmwarePolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
