export function generateIotCommandsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
