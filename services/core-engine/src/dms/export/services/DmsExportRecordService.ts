import { DmsExportRecordModel, DmsExportRecordValidator } from "@nexora/types/domains/dms/export/DmsExportRecord";

export class DmsExportRecordService {
  private repository = new Map<string, DmsExportRecordModel>();

  public create(data: Omit<DmsExportRecordModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportRecordModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportRecordModel>): DmsExportRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportRecordModel = {
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
