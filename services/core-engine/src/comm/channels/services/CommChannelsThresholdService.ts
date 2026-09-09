import { CommChannelsThresholdModel, CommChannelsThresholdValidator } from "@nexora/types/domains/comm/channels/CommChannelsThreshold";

export class CommChannelsThresholdService {
  private repository = new Map<string, CommChannelsThresholdModel>();

  public create(data: Omit<CommChannelsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsThresholdModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsThresholdModel>): CommChannelsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsThresholdModel = {
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
