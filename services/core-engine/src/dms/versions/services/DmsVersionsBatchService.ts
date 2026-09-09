import { DmsVersionsBatchModel, DmsVersionsBatchValidator } from "@nexora/types/domains/dms/versions/DmsVersionsBatch";

export class DmsVersionsBatchService {
  private repository = new Map<string, DmsVersionsBatchModel>();

  public create(data: Omit<DmsVersionsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): DmsVersionsBatchModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsVersionsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsVersionsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsVersionsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsVersionsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsVersionsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsVersionsBatchModel>): DmsVersionsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsVersionsBatchModel = {
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
