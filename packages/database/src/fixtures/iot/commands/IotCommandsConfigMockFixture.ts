export function generateIotCommandsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
