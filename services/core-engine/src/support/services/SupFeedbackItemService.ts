import { SupFeedbackItemData, SupFeedbackItemValidator } from "../../../../packages/types/src/domains/support/SupFeedbackItem";

export class SupFeedbackItemService {
  private repository = new Map<string, SupFeedbackItemData>();

  public create(data: Omit<SupFeedbackItemData, "id" | "createdAt" | "updatedAt">): SupFeedbackItemData {
    const id = "sup_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SupFeedbackItemData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupFeedbackItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupFeedbackItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupFeedbackItemData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SupFeedbackItemData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SupFeedbackItemData>): SupFeedbackItemData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupFeedbackItemData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
