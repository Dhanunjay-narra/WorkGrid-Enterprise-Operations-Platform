import { DmsOcrSummaryModel, DmsOcrSummaryValidator } from "@nexora/types/domains/dms/ocr/DmsOcrSummary";

export class DmsOcrSummaryService {
  private repository = new Map<string, DmsOcrSummaryModel>();

  public create(data: Omit<DmsOcrSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrSummaryModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrSummaryModel>): DmsOcrSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrSummaryModel = {
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
