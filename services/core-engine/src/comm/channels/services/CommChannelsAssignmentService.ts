import { CommChannelsAssignmentModel, CommChannelsAssignmentValidator } from "@nexora/types/domains/comm/channels/CommChannelsAssignment";

export class CommChannelsAssignmentService {
  private repository = new Map<string, CommChannelsAssignmentModel>();

  public create(data: Omit<CommChannelsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsAssignmentModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsAssignmentModel>): CommChannelsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsAssignmentModel = {
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
