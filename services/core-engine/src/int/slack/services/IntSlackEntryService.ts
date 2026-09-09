import { IntSlackEntryModel, IntSlackEntryValidator } from "@nexora/types/domains/int/slack/IntSlackEntry";

export class IntSlackEntryService {
  private repository = new Map<string, IntSlackEntryModel>();

  public create(data: Omit<IntSlackEntryModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackEntryModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackEntryModel>): IntSlackEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackEntryModel = {
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
