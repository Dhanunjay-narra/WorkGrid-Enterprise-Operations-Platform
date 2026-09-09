import { BiWidgetsTaskModel, BiWidgetsTaskValidator } from "@nexora/types/domains/bi/widgets/BiWidgetsTask";

export class BiWidgetsTaskService {
  private repository = new Map<string, BiWidgetsTaskModel>();

  public create(data: Omit<BiWidgetsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): BiWidgetsTaskModel {
    const id = "bi_w_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiWidgetsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiWidgetsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiWidgetsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiWidgetsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiWidgetsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiWidgetsTaskModel>): BiWidgetsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiWidgetsTaskModel = {
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
