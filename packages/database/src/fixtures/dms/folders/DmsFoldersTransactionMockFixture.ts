export function generateDmsFoldersTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
