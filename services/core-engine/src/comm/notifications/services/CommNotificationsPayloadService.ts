import { CommNotificationsPayloadModel, CommNotificationsPayloadValidator } from "@nexora/types/domains/comm/notifications/CommNotificationsPayload";

export class CommNotificationsPayloadService {
  private repository = new Map<string, CommNotificationsPayloadModel>();

  public create(data: Omit<CommNotificationsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): CommNotificationsPayloadModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommNotificationsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommNotificationsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommNotificationsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommNotificationsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommNotificationsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommNotificationsPayloadModel>): CommNotificationsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommNotificationsPayloadModel = {
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
