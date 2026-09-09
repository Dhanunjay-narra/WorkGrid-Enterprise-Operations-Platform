import { DmsSignaturesRecordModel, DmsSignaturesRecordValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesRecord";

export class DmsSignaturesRecordService {
  private repository = new Map<string, DmsSignaturesRecordModel>();

  public create(data: Omit<DmsSignaturesRecordModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesRecordModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesRecordModel>): DmsSignaturesRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesRecordModel = {
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
