import { BiExportsConfigModel, BiExportsConfigValidator } from "@nexora/types/domains/bi/exports/BiExportsConfig";

export class BiExportsConfigService {
  private repository = new Map<string, BiExportsConfigModel>();

  public create(data: Omit<BiExportsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): BiExportsConfigModel {
    const id = "bi_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiExportsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiExportsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiExportsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiExportsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiExportsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiExportsConfigModel>): BiExportsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiExportsConfigModel = {
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
