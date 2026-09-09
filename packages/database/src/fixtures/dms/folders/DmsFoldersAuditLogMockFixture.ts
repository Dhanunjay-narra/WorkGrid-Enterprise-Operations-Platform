export function generateDmsFoldersAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
