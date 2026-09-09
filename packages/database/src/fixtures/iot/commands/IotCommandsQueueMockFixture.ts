export function generateIotCommandsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
