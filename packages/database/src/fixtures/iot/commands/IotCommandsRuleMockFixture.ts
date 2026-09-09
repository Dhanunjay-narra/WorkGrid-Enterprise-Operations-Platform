export function generateIotCommandsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
