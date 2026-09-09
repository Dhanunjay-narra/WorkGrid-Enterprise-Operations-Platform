import { CommChannelsEntryModel, CommChannelsEntryValidator } from "@nexora/types/domains/comm/channels/CommChannelsEntry";

export class CommChannelsEntryService {
  private repository = new Map<string, CommChannelsEntryModel>();

  public create(data: Omit<CommChannelsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsEntryModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsEntryModel>): CommChannelsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsEntryModel = {
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
