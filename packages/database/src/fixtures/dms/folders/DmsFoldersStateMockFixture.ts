export function generateDmsFoldersStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
