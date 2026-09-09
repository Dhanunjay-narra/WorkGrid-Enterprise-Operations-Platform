import { IntSlackConfigModel, IntSlackConfigValidator } from "@nexora/types/domains/int/slack/IntSlackConfig";

export class IntSlackConfigService {
  private repository = new Map<string, IntSlackConfigModel>();

  public create(data: Omit<IntSlackConfigModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackConfigModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackConfigModel>): IntSlackConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackConfigModel = {
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
