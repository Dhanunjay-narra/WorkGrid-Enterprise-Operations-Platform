import { InvItemCategoryData, InvItemCategoryValidator } from "../../../../packages/types/src/domains/inventory/InvItemCategory";

export class InvItemCategoryService {
  private repository = new Map<string, InvItemCategoryData>();

  public create(data: Omit<InvItemCategoryData, "id" | "createdAt" | "updatedAt">): InvItemCategoryData {
    const id = "inv_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: InvItemCategoryData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = InvItemCategoryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InvItemCategory: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InvItemCategoryData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): InvItemCategoryData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<InvItemCategoryData>): InvItemCategoryData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InvItemCategoryData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
