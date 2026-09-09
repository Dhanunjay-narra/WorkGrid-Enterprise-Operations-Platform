import { CommPresenceEntryModel, CommPresenceEntryValidator } from "@nexora/types/domains/comm/presence/CommPresenceEntry";

export class CommPresenceEntryService {
  private repository = new Map<string, CommPresenceEntryModel>();

  public create(data: Omit<CommPresenceEntryModel, "id" | "version" | "createdAt" | "updatedAt">): CommPresenceEntryModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommPresenceEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommPresenceEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommPresenceEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommPresenceEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommPresenceEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommPresenceEntryModel>): CommPresenceEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommPresenceEntryModel = {
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
