export function generateIotThresholdsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
