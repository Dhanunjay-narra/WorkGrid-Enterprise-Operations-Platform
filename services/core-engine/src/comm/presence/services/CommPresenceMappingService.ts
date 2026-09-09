import { CommPresenceMappingModel, CommPresenceMappingValidator } from "@nexora/types/domains/comm/presence/CommPresenceMapping";

export class CommPresenceMappingService {
  private repository = new Map<string, CommPresenceMappingModel>();

  public create(data: Omit<CommPresenceMappingModel, "id" | "version" | "createdAt" | "updatedAt">): CommPresenceMappingModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommPresenceMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommPresenceMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommPresenceMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommPresenceMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommPresenceMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommPresenceMappingModel>): CommPresenceMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommPresenceMappingModel = {
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
