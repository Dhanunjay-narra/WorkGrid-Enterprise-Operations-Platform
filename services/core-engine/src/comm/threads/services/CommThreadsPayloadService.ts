import { CommThreadsPayloadModel, CommThreadsPayloadValidator } from "@nexora/types/domains/comm/threads/CommThreadsPayload";

export class CommThreadsPayloadService {
  private repository = new Map<string, CommThreadsPayloadModel>();

  public create(data: Omit<CommThreadsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsPayloadModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsPayloadModel>): CommThreadsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsPayloadModel = {
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
