export function generateDmsFoldersBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
