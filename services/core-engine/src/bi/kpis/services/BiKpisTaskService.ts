import { BiKpisTaskModel, BiKpisTaskValidator } from "@nexora/types/domains/bi/kpis/BiKpisTask";

export class BiKpisTaskService {
  private repository = new Map<string, BiKpisTaskModel>();

  public create(data: Omit<BiKpisTaskModel, "id" | "version" | "createdAt" | "updatedAt">): BiKpisTaskModel {
    const id = "bi_k_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiKpisTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiKpisTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiKpisTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiKpisTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiKpisTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiKpisTaskModel>): BiKpisTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiKpisTaskModel = {
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
