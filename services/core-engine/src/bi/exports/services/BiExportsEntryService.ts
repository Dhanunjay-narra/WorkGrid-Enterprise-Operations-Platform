import { BiExportsEntryModel, BiExportsEntryValidator } from "@nexora/types/domains/bi/exports/BiExportsEntry";

export class BiExportsEntryService {
  private repository = new Map<string, BiExportsEntryModel>();

  public create(data: Omit<BiExportsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): BiExportsEntryModel {
    const id = "bi_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiExportsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiExportsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiExportsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiExportsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiExportsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiExportsEntryModel>): BiExportsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiExportsEntryModel = {
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
