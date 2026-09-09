import { DmsRetentionSummaryModel, DmsRetentionSummaryValidator } from "@nexora/types/domains/dms/retention/DmsRetentionSummary";

export class DmsRetentionSummaryService {
  private repository = new Map<string, DmsRetentionSummaryModel>();

  public create(data: Omit<DmsRetentionSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): DmsRetentionSummaryModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsRetentionSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsRetentionSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsRetentionSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsRetentionSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsRetentionSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsRetentionSummaryModel>): DmsRetentionSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsRetentionSummaryModel = {
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
