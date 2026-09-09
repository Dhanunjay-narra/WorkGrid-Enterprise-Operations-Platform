import { TenancyPayloadModel, TenancyPayloadValidator } from "@nexora/types/domains/tenancy/TenancyPayload";

export class TenancyPayloadService {
  private repository = new Map<string, TenancyPayloadModel>();

  public create(data: Omit<TenancyPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyPayloadModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyPayloadModel>): TenancyPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyPayloadModel = {
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
