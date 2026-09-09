import { BiExportsRuleModel, BiExportsRuleValidator } from "@nexora/types/domains/bi/exports/BiExportsRule";

export class BiExportsRuleService {
  private repository = new Map<string, BiExportsRuleModel>();

  public create(data: Omit<BiExportsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): BiExportsRuleModel {
    const id = "bi_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiExportsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiExportsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiExportsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiExportsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiExportsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiExportsRuleModel>): BiExportsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiExportsRuleModel = {
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
