export function generateIotCommandsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
