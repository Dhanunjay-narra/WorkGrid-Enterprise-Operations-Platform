import { CommThreadsConfigModel, CommThreadsConfigValidator } from "@nexora/types/domains/comm/threads/CommThreadsConfig";

export class CommThreadsConfigService {
  private repository = new Map<string, CommThreadsConfigModel>();

  public create(data: Omit<CommThreadsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsConfigModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsConfigModel>): CommThreadsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsConfigModel = {
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
