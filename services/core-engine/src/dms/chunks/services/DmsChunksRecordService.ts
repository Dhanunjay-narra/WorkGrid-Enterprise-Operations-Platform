import { DmsChunksRecordModel, DmsChunksRecordValidator } from "@nexora/types/domains/dms/chunks/DmsChunksRecord";

export class DmsChunksRecordService {
  private repository = new Map<string, DmsChunksRecordModel>();

  public create(data: Omit<DmsChunksRecordModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksRecordModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksRecordModel>): DmsChunksRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksRecordModel = {
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
