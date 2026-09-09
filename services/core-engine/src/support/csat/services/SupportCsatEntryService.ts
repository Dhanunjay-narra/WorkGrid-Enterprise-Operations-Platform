import { SupportCsatEntryModel, SupportCsatEntryValidator } from "@nexora/types/domains/support/csat/SupportCsatEntry";

export class SupportCsatEntryService {
  private repository = new Map<string, SupportCsatEntryModel>();

  public create(data: Omit<SupportCsatEntryModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatEntryModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatEntryModel>): SupportCsatEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatEntryModel = {
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
