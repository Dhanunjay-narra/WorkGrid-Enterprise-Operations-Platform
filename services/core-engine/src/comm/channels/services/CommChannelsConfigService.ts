import { CommChannelsConfigModel, CommChannelsConfigValidator } from "@nexora/types/domains/comm/channels/CommChannelsConfig";

export class CommChannelsConfigService {
  private repository = new Map<string, CommChannelsConfigModel>();

  public create(data: Omit<CommChannelsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsConfigModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsConfigModel>): CommChannelsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsConfigModel = {
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
