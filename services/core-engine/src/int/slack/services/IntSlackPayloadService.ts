import { IntSlackPayloadModel, IntSlackPayloadValidator } from "@nexora/types/domains/int/slack/IntSlackPayload";

export class IntSlackPayloadService {
  private repository = new Map<string, IntSlackPayloadModel>();

  public create(data: Omit<IntSlackPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackPayloadModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackPayloadModel>): IntSlackPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackPayloadModel = {
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
