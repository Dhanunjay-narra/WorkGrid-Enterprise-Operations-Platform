export function generateDmsFoldersSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
