export function generateDmsFoldersNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
