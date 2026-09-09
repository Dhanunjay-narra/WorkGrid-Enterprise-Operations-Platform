import { CrmHealthPayloadModel, CrmHealthPayloadValidator } from "@nexora/types/domains/crm/health/CrmHealthPayload";

export class CrmHealthPayloadService {
  private repository = new Map<string, CrmHealthPayloadModel>();

  public create(data: Omit<CrmHealthPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthPayloadModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthPayloadModel>): CrmHealthPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthPayloadModel = {
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
