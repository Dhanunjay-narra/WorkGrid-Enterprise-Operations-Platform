export function generateIotCommandsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
