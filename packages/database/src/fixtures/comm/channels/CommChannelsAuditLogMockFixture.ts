export function generateCommChannelsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_channels",
    entity: "CommChannelsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
