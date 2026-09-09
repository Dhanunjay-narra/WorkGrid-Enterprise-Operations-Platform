export function generateIotCommandsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
