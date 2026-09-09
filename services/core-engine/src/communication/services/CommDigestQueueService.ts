import { CommDigestQueueData, CommDigestQueueValidator } from "../../../../packages/types/src/domains/communication/CommDigestQueue";

export class CommDigestQueueService {
  private repository = new Map<string, CommDigestQueueData>();

  public create(data: Omit<CommDigestQueueData, "id" | "createdAt" | "updatedAt">): CommDigestQueueData {
    const id = "com_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CommDigestQueueData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestQueueData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CommDigestQueueData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CommDigestQueueData>): CommDigestQueueData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestQueueData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
