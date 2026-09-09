export function generateIotCommandsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
