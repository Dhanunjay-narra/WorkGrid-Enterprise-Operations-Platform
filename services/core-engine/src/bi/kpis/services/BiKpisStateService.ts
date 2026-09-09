import { BiKpisStateModel, BiKpisStateValidator } from "@nexora/types/domains/bi/kpis/BiKpisState";

export class BiKpisStateService {
  private repository = new Map<string, BiKpisStateModel>();

  public create(data: Omit<BiKpisStateModel, "id" | "version" | "createdAt" | "updatedAt">): BiKpisStateModel {
    const id = "bi_k_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiKpisStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiKpisStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiKpisState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiKpisStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiKpisStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiKpisStateModel>): BiKpisStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiKpisStateModel = {
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
