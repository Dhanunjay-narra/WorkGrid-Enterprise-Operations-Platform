export function generateIotCommandsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
