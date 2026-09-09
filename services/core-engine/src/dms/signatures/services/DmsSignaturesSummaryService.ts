import { DmsSignaturesSummaryModel, DmsSignaturesSummaryValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesSummary";

export class DmsSignaturesSummaryService {
  private repository = new Map<string, DmsSignaturesSummaryModel>();

  public create(data: Omit<DmsSignaturesSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesSummaryModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesSummaryModel>): DmsSignaturesSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesSummaryModel = {
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
