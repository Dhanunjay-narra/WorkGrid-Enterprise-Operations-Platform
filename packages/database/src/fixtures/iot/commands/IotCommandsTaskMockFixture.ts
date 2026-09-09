export function generateIotCommandsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
