export function generateIotCommandsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
