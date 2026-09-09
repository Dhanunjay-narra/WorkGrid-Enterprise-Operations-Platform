export function generateIotCommandsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
