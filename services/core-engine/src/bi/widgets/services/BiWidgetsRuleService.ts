import { BiWidgetsRuleModel, BiWidgetsRuleValidator } from "@nexora/types/domains/bi/widgets/BiWidgetsRule";

export class BiWidgetsRuleService {
  private repository = new Map<string, BiWidgetsRuleModel>();

  public create(data: Omit<BiWidgetsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): BiWidgetsRuleModel {
    const id = "bi_w_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiWidgetsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiWidgetsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiWidgetsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiWidgetsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiWidgetsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiWidgetsRuleModel>): BiWidgetsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiWidgetsRuleModel = {
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
