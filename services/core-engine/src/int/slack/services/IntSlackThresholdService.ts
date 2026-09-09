import { IntSlackThresholdModel, IntSlackThresholdValidator } from "@nexora/types/domains/int/slack/IntSlackThreshold";

export class IntSlackThresholdService {
  private repository = new Map<string, IntSlackThresholdModel>();

  public create(data: Omit<IntSlackThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackThresholdModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackThresholdModel>): IntSlackThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackThresholdModel = {
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
