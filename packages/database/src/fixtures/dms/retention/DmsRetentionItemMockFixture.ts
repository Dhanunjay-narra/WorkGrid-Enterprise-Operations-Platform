export function generateDmsRetentionItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
