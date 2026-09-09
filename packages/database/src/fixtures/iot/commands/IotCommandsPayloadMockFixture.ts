export function generateIotCommandsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
