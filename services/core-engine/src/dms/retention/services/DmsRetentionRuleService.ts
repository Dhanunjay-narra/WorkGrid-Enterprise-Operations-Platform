import { DmsRetentionRuleModel, DmsRetentionRuleValidator } from "@nexora/types/domains/dms/retention/DmsRetentionRule";

export class DmsRetentionRuleService {
  private repository = new Map<string, DmsRetentionRuleModel>();

  public create(data: Omit<DmsRetentionRuleModel, "id" | "version" | "createdAt" | "updatedAt">): DmsRetentionRuleModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsRetentionRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsRetentionRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsRetentionRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsRetentionRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsRetentionRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsRetentionRuleModel>): DmsRetentionRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsRetentionRuleModel = {
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
