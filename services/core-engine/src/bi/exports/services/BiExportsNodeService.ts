import { BiExportsNodeModel, BiExportsNodeValidator } from "@nexora/types/domains/bi/exports/BiExportsNode";

export class BiExportsNodeService {
  private repository = new Map<string, BiExportsNodeModel>();

  public create(data: Omit<BiExportsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): BiExportsNodeModel {
    const id = "bi_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiExportsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiExportsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiExportsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiExportsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiExportsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiExportsNodeModel>): BiExportsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiExportsNodeModel = {
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
