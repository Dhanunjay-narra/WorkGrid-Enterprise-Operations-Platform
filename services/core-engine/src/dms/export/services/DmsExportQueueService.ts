import { DmsExportQueueModel, DmsExportQueueValidator } from "@nexora/types/domains/dms/export/DmsExportQueue";

export class DmsExportQueueService {
  private repository = new Map<string, DmsExportQueueModel>();

  public create(data: Omit<DmsExportQueueModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportQueueModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportQueueModel>): DmsExportQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportQueueModel = {
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
