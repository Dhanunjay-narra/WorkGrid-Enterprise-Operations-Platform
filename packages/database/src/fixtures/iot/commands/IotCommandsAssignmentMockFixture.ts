export function generateIotCommandsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "iot_commands",
    entity: "IotCommandsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
