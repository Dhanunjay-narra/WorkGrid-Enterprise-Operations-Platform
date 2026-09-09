import { BiExportsTaskModel, BiExportsTaskValidator } from "@nexora/types/domains/bi/exports/BiExportsTask";

export class BiExportsTaskService {
  private repository = new Map<string, BiExportsTaskModel>();

  public create(data: Omit<BiExportsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): BiExportsTaskModel {
    const id = "bi_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiExportsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiExportsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiExportsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiExportsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiExportsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiExportsTaskModel>): BiExportsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiExportsTaskModel = {
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
