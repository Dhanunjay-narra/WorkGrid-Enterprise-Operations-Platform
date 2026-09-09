export function generateIotThresholdsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
