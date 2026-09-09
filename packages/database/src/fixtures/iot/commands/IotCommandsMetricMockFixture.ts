export function generateIotCommandsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
