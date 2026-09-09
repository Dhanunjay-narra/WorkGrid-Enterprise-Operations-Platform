export function generateIotCommandsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
