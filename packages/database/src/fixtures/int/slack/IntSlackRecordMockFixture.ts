export function generateIntSlackRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
