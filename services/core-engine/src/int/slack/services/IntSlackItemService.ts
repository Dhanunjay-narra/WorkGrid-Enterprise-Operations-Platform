import { IntSlackItemModel, IntSlackItemValidator } from "@nexora/types/domains/int/slack/IntSlackItem";

export class IntSlackItemService {
  private repository = new Map<string, IntSlackItemModel>();

  public create(data: Omit<IntSlackItemModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackItemModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackItemModel>): IntSlackItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackItemModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}
