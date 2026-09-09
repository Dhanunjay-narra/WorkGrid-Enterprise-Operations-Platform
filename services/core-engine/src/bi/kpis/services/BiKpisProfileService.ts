import { BiKpisProfileModel, BiKpisProfileValidator } from "@nexora/types/domains/bi/kpis/BiKpisProfile";

export class BiKpisProfileService {
  private repository = new Map<string, BiKpisProfileModel>();

  public create(data: Omit<BiKpisProfileModel, "id" | "version" | "createdAt" | "updatedAt">): BiKpisProfileModel {
    const id = "bi_k_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiKpisProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiKpisProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiKpisProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiKpisProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiKpisProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiKpisProfileModel>): BiKpisProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiKpisProfileModel = {
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
