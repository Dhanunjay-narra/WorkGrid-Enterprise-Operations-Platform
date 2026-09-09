import { IntSlackStateModel, IntSlackStateValidator } from "@nexora/types/domains/int/slack/IntSlackState";

export class IntSlackStateService {
  private repository = new Map<string, IntSlackStateModel>();

  public create(data: Omit<IntSlackStateModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackStateModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackStateModel>): IntSlackStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackStateModel = {
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
