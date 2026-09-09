import { DmsFilesBatchModel, DmsFilesBatchValidator } from "@nexora/types/domains/dms/files/DmsFilesBatch";

export class DmsFilesBatchService {
  private repository = new Map<string, DmsFilesBatchModel>();

  public create(data: Omit<DmsFilesBatchModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesBatchModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesBatchModel>): DmsFilesBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesBatchModel = {
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
