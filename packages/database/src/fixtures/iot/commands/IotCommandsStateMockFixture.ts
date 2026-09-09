export function generateIotCommandsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
