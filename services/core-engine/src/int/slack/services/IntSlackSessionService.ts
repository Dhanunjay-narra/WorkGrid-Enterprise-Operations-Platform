import { IntSlackSessionModel, IntSlackSessionValidator } from "@nexora/types/domains/int/slack/IntSlackSession";

export class IntSlackSessionService {
  private repository = new Map<string, IntSlackSessionModel>();

  public create(data: Omit<IntSlackSessionModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackSessionModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackSessionModel>): IntSlackSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackSessionModel = {
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
