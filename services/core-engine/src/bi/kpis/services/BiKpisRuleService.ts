import { BiKpisRuleModel, BiKpisRuleValidator } from "@nexora/types/domains/bi/kpis/BiKpisRule";

export class BiKpisRuleService {
  private repository = new Map<string, BiKpisRuleModel>();

  public create(data: Omit<BiKpisRuleModel, "id" | "version" | "createdAt" | "updatedAt">): BiKpisRuleModel {
    const id = "bi_k_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiKpisRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiKpisRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiKpisRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiKpisRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiKpisRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiKpisRuleModel>): BiKpisRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiKpisRuleModel = {
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
