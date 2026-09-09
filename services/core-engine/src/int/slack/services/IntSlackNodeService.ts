import { IntSlackNodeModel, IntSlackNodeValidator } from "@nexora/types/domains/int/slack/IntSlackNode";

export class IntSlackNodeService {
  private repository = new Map<string, IntSlackNodeModel>();

  public create(data: Omit<IntSlackNodeModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackNodeModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackNodeModel>): IntSlackNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackNodeModel = {
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
