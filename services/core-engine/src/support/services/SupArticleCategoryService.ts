import { SupArticleCategoryData, SupArticleCategoryValidator } from "../../../../packages/types/src/domains/support/SupArticleCategory";

export class SupArticleCategoryService {
  private repository = new Map<string, SupArticleCategoryData>();

  public create(data: Omit<SupArticleCategoryData, "id" | "createdAt" | "updatedAt">): SupArticleCategoryData {
    const id = "sup_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SupArticleCategoryData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupArticleCategoryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupArticleCategory: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupArticleCategoryData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SupArticleCategoryData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SupArticleCategoryData>): SupArticleCategoryData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupArticleCategoryData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
