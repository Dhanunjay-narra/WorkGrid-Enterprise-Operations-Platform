export function generateDmsFoldersConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
