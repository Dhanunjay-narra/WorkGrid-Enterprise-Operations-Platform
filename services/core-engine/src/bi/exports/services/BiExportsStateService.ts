import { BiExportsStateModel, BiExportsStateValidator } from "@nexora/types/domains/bi/exports/BiExportsState";

export class BiExportsStateService {
  private repository = new Map<string, BiExportsStateModel>();

  public create(data: Omit<BiExportsStateModel, "id" | "version" | "createdAt" | "updatedAt">): BiExportsStateModel {
    const id = "bi_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiExportsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiExportsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiExportsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiExportsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiExportsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiExportsStateModel>): BiExportsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiExportsStateModel = {
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
