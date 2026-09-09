import { IntSlackTaskModel, IntSlackTaskValidator } from "@nexora/types/domains/int/slack/IntSlackTask";

export class IntSlackTaskService {
  private repository = new Map<string, IntSlackTaskModel>();

  public create(data: Omit<IntSlackTaskModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackTaskModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackTaskModel>): IntSlackTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackTaskModel = {
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
