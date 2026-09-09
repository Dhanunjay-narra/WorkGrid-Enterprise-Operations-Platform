import { IntWebhooksProfileModel, IntWebhooksProfileValidator } from "@nexora/types/domains/int/webhooks/IntWebhooksProfile";

export class IntWebhooksProfileService {
  private repository = new Map<string, IntWebhooksProfileModel>();

  public create(data: Omit<IntWebhooksProfileModel, "id" | "version" | "createdAt" | "updatedAt">): IntWebhooksProfileModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntWebhooksProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhooksProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhooksProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhooksProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntWebhooksProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntWebhooksProfileModel>): IntWebhooksProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhooksProfileModel = {
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
