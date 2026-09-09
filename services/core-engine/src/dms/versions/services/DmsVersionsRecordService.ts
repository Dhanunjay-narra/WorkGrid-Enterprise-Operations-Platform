import { DmsVersionsRecordModel, DmsVersionsRecordValidator } from "@nexora/types/domains/dms/versions/DmsVersionsRecord";

export class DmsVersionsRecordService {
  private repository = new Map<string, DmsVersionsRecordModel>();

  public create(data: Omit<DmsVersionsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): DmsVersionsRecordModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsVersionsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsVersionsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsVersionsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsVersionsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsVersionsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsVersionsRecordModel>): DmsVersionsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsVersionsRecordModel = {
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
