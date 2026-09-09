import { DmsFilesRecordModel, DmsFilesRecordValidator } from "@nexora/types/domains/dms/files/DmsFilesRecord";

export class DmsFilesRecordService {
  private repository = new Map<string, DmsFilesRecordModel>();

  public create(data: Omit<DmsFilesRecordModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesRecordModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesRecordModel>): DmsFilesRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesRecordModel = {
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
