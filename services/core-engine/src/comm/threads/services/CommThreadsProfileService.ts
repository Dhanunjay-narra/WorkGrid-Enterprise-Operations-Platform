import { CommThreadsProfileModel, CommThreadsProfileValidator } from "@nexora/types/domains/comm/threads/CommThreadsProfile";

export class CommThreadsProfileService {
  private repository = new Map<string, CommThreadsProfileModel>();

  public create(data: Omit<CommThreadsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsProfileModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsProfileModel>): CommThreadsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsProfileModel = {
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
