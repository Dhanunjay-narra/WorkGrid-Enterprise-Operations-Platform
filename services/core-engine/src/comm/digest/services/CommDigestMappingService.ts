import { CommDigestMappingModel, CommDigestMappingValidator } from "@nexora/types/domains/comm/digest/CommDigestMapping";

export class CommDigestMappingService {
  private repository = new Map<string, CommDigestMappingModel>();

  public create(data: Omit<CommDigestMappingModel, "id" | "version" | "createdAt" | "updatedAt">): CommDigestMappingModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommDigestMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommDigestMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommDigestMappingModel>): CommDigestMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestMappingModel = {
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
