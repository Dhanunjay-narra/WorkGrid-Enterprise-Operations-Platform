import { CommPresenceConfigModel, CommPresenceConfigValidator } from "@nexora/types/domains/comm/presence/CommPresenceConfig";

export class CommPresenceConfigService {
  private repository = new Map<string, CommPresenceConfigModel>();

  public create(data: Omit<CommPresenceConfigModel, "id" | "version" | "createdAt" | "updatedAt">): CommPresenceConfigModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommPresenceConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommPresenceConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommPresenceConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommPresenceConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommPresenceConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommPresenceConfigModel>): CommPresenceConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommPresenceConfigModel = {
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
