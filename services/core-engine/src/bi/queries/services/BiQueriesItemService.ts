import { BiQueriesItemModel, BiQueriesItemValidator } from "@nexora/types/domains/bi/queries/BiQueriesItem";

export class BiQueriesItemService {
  private repository = new Map<string, BiQueriesItemModel>();

  public create(data: Omit<BiQueriesItemModel, "id" | "version" | "createdAt" | "updatedAt">): BiQueriesItemModel {
    const id = "bi_q_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiQueriesItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiQueriesItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiQueriesItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiQueriesItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiQueriesItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiQueriesItemModel>): BiQueriesItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiQueriesItemModel = {
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
