import { CommNotificationsAssignmentModel, CommNotificationsAssignmentValidator } from "@nexora/types/domains/comm/notifications/CommNotificationsAssignment";

export class CommNotificationsAssignmentService {
  private repository = new Map<string, CommNotificationsAssignmentModel>();

  public create(data: Omit<CommNotificationsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): CommNotificationsAssignmentModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommNotificationsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommNotificationsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommNotificationsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommNotificationsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommNotificationsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommNotificationsAssignmentModel>): CommNotificationsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommNotificationsAssignmentModel = {
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
