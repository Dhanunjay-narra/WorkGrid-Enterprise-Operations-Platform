import { BiWidgetsSessionModel, BiWidgetsSessionValidator } from "@nexora/types/domains/bi/widgets/BiWidgetsSession";

export class BiWidgetsSessionService {
  private repository = new Map<string, BiWidgetsSessionModel>();

  public create(data: Omit<BiWidgetsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): BiWidgetsSessionModel {
    const id = "bi_w_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiWidgetsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiWidgetsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiWidgetsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiWidgetsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiWidgetsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiWidgetsSessionModel>): BiWidgetsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiWidgetsSessionModel = {
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
