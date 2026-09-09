import { CommDigestThresholdModel, CommDigestThresholdValidator } from "@nexora/types/domains/comm/digest/CommDigestThreshold";

export class CommDigestThresholdService {
  private repository = new Map<string, CommDigestThresholdModel>();

  public create(data: Omit<CommDigestThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): CommDigestThresholdModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommDigestThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommDigestThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommDigestThresholdModel>): CommDigestThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestThresholdModel = {
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
