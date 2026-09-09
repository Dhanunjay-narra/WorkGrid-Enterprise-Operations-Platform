import { BiExportsEventModel, BiExportsEventValidator } from "@nexora/types/domains/bi/exports/BiExportsEvent";

export class BiExportsEventService {
  private repository = new Map<string, BiExportsEventModel>();

  public create(data: Omit<BiExportsEventModel, "id" | "version" | "createdAt" | "updatedAt">): BiExportsEventModel {
    const id = "bi_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiExportsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiExportsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiExportsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiExportsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiExportsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiExportsEventModel>): BiExportsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiExportsEventModel = {
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
