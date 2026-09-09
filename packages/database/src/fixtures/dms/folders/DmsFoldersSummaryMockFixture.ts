export function generateDmsFoldersSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
