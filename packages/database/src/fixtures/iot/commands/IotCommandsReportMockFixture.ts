export function generateIotCommandsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
