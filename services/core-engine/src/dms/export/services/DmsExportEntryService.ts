import { DmsExportEntryModel, DmsExportEntryValidator } from "@nexora/types/domains/dms/export/DmsExportEntry";

export class DmsExportEntryService {
  private repository = new Map<string, DmsExportEntryModel>();

  public create(data: Omit<DmsExportEntryModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportEntryModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportEntryModel>): DmsExportEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportEntryModel = {
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
