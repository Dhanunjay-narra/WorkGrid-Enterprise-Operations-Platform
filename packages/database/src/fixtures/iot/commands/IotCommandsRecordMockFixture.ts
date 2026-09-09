export function generateIotCommandsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
