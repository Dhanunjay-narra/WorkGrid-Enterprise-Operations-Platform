import { DmsOcrEntryModel, DmsOcrEntryValidator } from "@nexora/types/domains/dms/ocr/DmsOcrEntry";

export class DmsOcrEntryService {
  private repository = new Map<string, DmsOcrEntryModel>();

  public create(data: Omit<DmsOcrEntryModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrEntryModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrEntryModel>): DmsOcrEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrEntryModel = {
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
