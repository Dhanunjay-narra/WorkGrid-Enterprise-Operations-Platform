import { DmsSignaturesEntryModel, DmsSignaturesEntryValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesEntry";

export class DmsSignaturesEntryService {
  private repository = new Map<string, DmsSignaturesEntryModel>();

  public create(data: Omit<DmsSignaturesEntryModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesEntryModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesEntryModel>): DmsSignaturesEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesEntryModel = {
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
