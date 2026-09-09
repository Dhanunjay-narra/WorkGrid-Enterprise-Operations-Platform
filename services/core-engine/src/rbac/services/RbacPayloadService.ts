import { RbacPayloadModel, RbacPayloadValidator } from "@nexora/types/domains/rbac/RbacPayload";

export class RbacPayloadService {
  private repository = new Map<string, RbacPayloadModel>();

  public create(data: Omit<RbacPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): RbacPayloadModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacPayloadModel>): RbacPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacPayloadModel = {
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
