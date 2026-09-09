import { DmsExportRuleModel, DmsExportRuleValidator } from "@nexora/types/domains/dms/export/DmsExportRule";

export class DmsExportRuleService {
  private repository = new Map<string, DmsExportRuleModel>();

  public create(data: Omit<DmsExportRuleModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportRuleModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportRuleModel>): DmsExportRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportRuleModel = {
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
