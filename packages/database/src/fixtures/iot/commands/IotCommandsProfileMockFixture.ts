export function generateIotCommandsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
