import { CrmHealthConfigModel, CrmHealthConfigValidator } from "@nexora/types/domains/crm/health/CrmHealthConfig";

export class CrmHealthConfigService {
  private repository = new Map<string, CrmHealthConfigModel>();

  public create(data: Omit<CrmHealthConfigModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthConfigModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthConfigModel>): CrmHealthConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthConfigModel = {
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
