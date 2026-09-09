export function generateIotThresholdsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_thresholds",
    entity: "IotThresholdsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
