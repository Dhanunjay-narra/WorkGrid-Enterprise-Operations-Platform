import { BiQueriesStateModel, BiQueriesStateValidator } from "@nexora/types/domains/bi/queries/BiQueriesState";

export class BiQueriesStateService {
  private repository = new Map<string, BiQueriesStateModel>();

  public create(data: Omit<BiQueriesStateModel, "id" | "version" | "createdAt" | "updatedAt">): BiQueriesStateModel {
    const id = "bi_q_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiQueriesStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiQueriesStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiQueriesState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiQueriesStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiQueriesStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiQueriesStateModel>): BiQueriesStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiQueriesStateModel = {
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
