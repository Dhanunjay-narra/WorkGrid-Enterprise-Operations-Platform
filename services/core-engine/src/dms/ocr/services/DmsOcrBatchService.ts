import { DmsOcrBatchModel, DmsOcrBatchValidator } from "@nexora/types/domains/dms/ocr/DmsOcrBatch";

export class DmsOcrBatchService {
  private repository = new Map<string, DmsOcrBatchModel>();

  public create(data: Omit<DmsOcrBatchModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrBatchModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrBatchModel>): DmsOcrBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrBatchModel = {
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
