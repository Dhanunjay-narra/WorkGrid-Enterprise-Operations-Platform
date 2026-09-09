import { CommChannelsSessionModel, CommChannelsSessionValidator } from "@nexora/types/domains/comm/channels/CommChannelsSession";

export class CommChannelsSessionService {
  private repository = new Map<string, CommChannelsSessionModel>();

  public create(data: Omit<CommChannelsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsSessionModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsSessionModel>): CommChannelsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsSessionModel = {
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
