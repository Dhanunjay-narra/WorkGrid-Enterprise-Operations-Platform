import { IntMappingsRuleModel, IntMappingsRuleValidator } from "@nexora/types/domains/int/mappings/IntMappingsRule";

export class IntMappingsRuleService {
  private repository = new Map<string, IntMappingsRuleModel>();

  public create(data: Omit<IntMappingsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsRuleModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsRuleModel>): IntMappingsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsRuleModel = {
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
