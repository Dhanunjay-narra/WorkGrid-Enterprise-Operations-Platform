export function generateIotCommandsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
