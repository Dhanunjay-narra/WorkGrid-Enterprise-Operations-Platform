import { DmsOcrRecordModel, DmsOcrRecordValidator } from "@nexora/types/domains/dms/ocr/DmsOcrRecord";

export class DmsOcrRecordService {
  private repository = new Map<string, DmsOcrRecordModel>();

  public create(data: Omit<DmsOcrRecordModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrRecordModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrRecordModel>): DmsOcrRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrRecordModel = {
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
