export function generateIotThresholdsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
