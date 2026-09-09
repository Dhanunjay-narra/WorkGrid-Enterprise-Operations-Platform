export function generateIotCommandsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
