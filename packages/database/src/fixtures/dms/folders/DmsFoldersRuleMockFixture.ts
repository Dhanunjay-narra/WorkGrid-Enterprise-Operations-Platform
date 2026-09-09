export function generateDmsFoldersRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
