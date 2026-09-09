export function generateIotThresholdsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
