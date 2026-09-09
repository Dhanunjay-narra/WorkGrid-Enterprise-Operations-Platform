import { BiExportsPolicyModel, BiExportsPolicyValidator } from "@nexora/types/domains/bi/exports/BiExportsPolicy";

export class BiExportsPolicyService {
  private repository = new Map<string, BiExportsPolicyModel>();

  public create(data: Omit<BiExportsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): BiExportsPolicyModel {
    const id = "bi_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiExportsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiExportsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiExportsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiExportsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiExportsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiExportsPolicyModel>): BiExportsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiExportsPolicyModel = {
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
