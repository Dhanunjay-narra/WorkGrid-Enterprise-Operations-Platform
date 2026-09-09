import { CommThreadsMappingModel, CommThreadsMappingValidator } from "@nexora/types/domains/comm/threads/CommThreadsMapping";

export class CommThreadsMappingService {
  private repository = new Map<string, CommThreadsMappingModel>();

  public create(data: Omit<CommThreadsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsMappingModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsMappingModel>): CommThreadsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsMappingModel = {
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
