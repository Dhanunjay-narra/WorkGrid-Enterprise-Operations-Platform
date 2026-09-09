import { DmsOcrQueueModel, DmsOcrQueueValidator } from "@nexora/types/domains/dms/ocr/DmsOcrQueue";

export class DmsOcrQueueService {
  private repository = new Map<string, DmsOcrQueueModel>();

  public create(data: Omit<DmsOcrQueueModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrQueueModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrQueueModel>): DmsOcrQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrQueueModel = {
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
