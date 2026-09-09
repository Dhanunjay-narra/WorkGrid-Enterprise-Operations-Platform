import { DmsVersionsRuleModel, DmsVersionsRuleValidator } from "@nexora/types/domains/dms/versions/DmsVersionsRule";

export class DmsVersionsRuleService {
  private repository = new Map<string, DmsVersionsRuleModel>();

  public create(data: Omit<DmsVersionsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): DmsVersionsRuleModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsVersionsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsVersionsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsVersionsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsVersionsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsVersionsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsVersionsRuleModel>): DmsVersionsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsVersionsRuleModel = {
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
