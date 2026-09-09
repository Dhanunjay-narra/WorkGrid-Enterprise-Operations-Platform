export function generateIotCommandsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
