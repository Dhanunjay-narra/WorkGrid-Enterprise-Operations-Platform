import { DmsRetentionEntryModel, DmsRetentionEntryValidator } from "@nexora/types/domains/dms/retention/DmsRetentionEntry";

export class DmsRetentionEntryService {
  private repository = new Map<string, DmsRetentionEntryModel>();

  public create(data: Omit<DmsRetentionEntryModel, "id" | "version" | "createdAt" | "updatedAt">): DmsRetentionEntryModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsRetentionEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsRetentionEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsRetentionEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsRetentionEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsRetentionEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsRetentionEntryModel>): DmsRetentionEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsRetentionEntryModel = {
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
