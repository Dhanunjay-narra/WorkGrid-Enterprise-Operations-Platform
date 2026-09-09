import { TenancyTaskModel, TenancyTaskValidator } from "@nexora/types/domains/tenancy/TenancyTask";

export class TenancyTaskService {
  private repository = new Map<string, TenancyTaskModel>();

  public create(data: Omit<TenancyTaskModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyTaskModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyTaskModel>): TenancyTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyTaskModel = {
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
