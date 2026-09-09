import { TenancySnapshotModel, TenancySnapshotValidator } from "@nexora/types/domains/tenancy/TenancySnapshot";

export class TenancySnapshotService {
  private repository = new Map<string, TenancySnapshotModel>();

  public create(data: Omit<TenancySnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): TenancySnapshotModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancySnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancySnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancySnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancySnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancySnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancySnapshotModel>): TenancySnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancySnapshotModel = {
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
