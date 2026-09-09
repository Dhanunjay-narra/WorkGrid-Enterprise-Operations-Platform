import { CommCallsMappingModel, CommCallsMappingValidator } from "@nexora/types/domains/comm/calls/CommCallsMapping";

export class CommCallsMappingService {
  private repository = new Map<string, CommCallsMappingModel>();

  public create(data: Omit<CommCallsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): CommCallsMappingModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommCallsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommCallsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommCallsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommCallsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommCallsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommCallsMappingModel>): CommCallsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommCallsMappingModel = {
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
