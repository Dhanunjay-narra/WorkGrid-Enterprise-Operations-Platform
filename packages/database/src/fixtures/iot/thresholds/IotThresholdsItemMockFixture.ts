export function generateIotThresholdsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
