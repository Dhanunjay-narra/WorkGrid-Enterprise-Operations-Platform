export function createSupArticleCategoryFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "sup_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-SUP",
    name: "SupArticleCategory Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
