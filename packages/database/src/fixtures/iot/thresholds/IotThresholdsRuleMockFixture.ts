export function generateIotThresholdsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
