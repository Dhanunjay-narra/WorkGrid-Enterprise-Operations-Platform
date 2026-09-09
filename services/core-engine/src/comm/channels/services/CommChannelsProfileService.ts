import { CommChannelsProfileModel, CommChannelsProfileValidator } from "@nexora/types/domains/comm/channels/CommChannelsProfile";

export class CommChannelsProfileService {
  private repository = new Map<string, CommChannelsProfileModel>();

  public create(data: Omit<CommChannelsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsProfileModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsProfileModel>): CommChannelsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsProfileModel = {
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
