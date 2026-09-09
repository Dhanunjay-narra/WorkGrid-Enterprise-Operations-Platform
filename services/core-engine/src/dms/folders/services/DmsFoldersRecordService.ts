import { DmsFoldersRecordModel, DmsFoldersRecordValidator } from "@nexora/types/domains/dms/folders/DmsFoldersRecord";

export class DmsFoldersRecordService {
  private repository = new Map<string, DmsFoldersRecordModel>();

  public create(data: Omit<DmsFoldersRecordModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersRecordModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersRecordModel>): DmsFoldersRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersRecordModel = {
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
