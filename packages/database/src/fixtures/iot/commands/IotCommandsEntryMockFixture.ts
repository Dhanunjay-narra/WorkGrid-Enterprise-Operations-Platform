export function generateIotCommandsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
