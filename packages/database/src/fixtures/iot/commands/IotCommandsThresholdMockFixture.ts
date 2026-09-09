export function generateIotCommandsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
