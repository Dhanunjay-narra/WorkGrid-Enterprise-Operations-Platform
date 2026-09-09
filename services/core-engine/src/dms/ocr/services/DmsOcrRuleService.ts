import { DmsOcrRuleModel, DmsOcrRuleValidator } from "@nexora/types/domains/dms/ocr/DmsOcrRule";

export class DmsOcrRuleService {
  private repository = new Map<string, DmsOcrRuleModel>();

  public create(data: Omit<DmsOcrRuleModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrRuleModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrRuleModel>): DmsOcrRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrRuleModel = {
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
