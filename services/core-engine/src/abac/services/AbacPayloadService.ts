import { AbacPayloadModel, AbacPayloadValidator } from "@nexora/types/domains/abac/AbacPayload";

export class AbacPayloadService {
  private repository = new Map<string, AbacPayloadModel>();

  public create(data: Omit<AbacPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): AbacPayloadModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacPayloadModel>): AbacPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacPayloadModel = {
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
