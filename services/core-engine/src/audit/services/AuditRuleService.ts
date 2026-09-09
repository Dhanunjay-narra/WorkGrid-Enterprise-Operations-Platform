import { AuditRuleModel, AuditRuleValidator } from "@nexora/types/domains/audit/AuditRule";

export class AuditRuleService {
  private repository = new Map<string, AuditRuleModel>();

  public create(data: Omit<AuditRuleModel, "id" | "version" | "createdAt" | "updatedAt">): AuditRuleModel {
    const id = "audi_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuditRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuditRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuditRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuditRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuditRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuditRuleModel>): AuditRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuditRuleModel = {
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
