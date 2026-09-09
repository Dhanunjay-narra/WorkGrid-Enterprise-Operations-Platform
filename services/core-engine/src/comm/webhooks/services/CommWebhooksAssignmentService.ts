import { CommWebhooksAssignmentModel, CommWebhooksAssignmentValidator } from "@nexora/types/domains/comm/webhooks/CommWebhooksAssignment";

export class CommWebhooksAssignmentService {
  private repository = new Map<string, CommWebhooksAssignmentModel>();

  public create(data: Omit<CommWebhooksAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): CommWebhooksAssignmentModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommWebhooksAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommWebhooksAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommWebhooksAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommWebhooksAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommWebhooksAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommWebhooksAssignmentModel>): CommWebhooksAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommWebhooksAssignmentModel = {
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
