import { DmsFilesEntryModel, DmsFilesEntryValidator } from "@nexora/types/domains/dms/files/DmsFilesEntry";

export class DmsFilesEntryService {
  private repository = new Map<string, DmsFilesEntryModel>();

  public create(data: Omit<DmsFilesEntryModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesEntryModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesEntryModel>): DmsFilesEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesEntryModel = {
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
