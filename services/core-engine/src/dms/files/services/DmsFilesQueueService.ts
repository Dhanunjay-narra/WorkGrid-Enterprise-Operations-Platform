import { DmsFilesQueueModel, DmsFilesQueueValidator } from "@nexora/types/domains/dms/files/DmsFilesQueue";

export class DmsFilesQueueService {
  private repository = new Map<string, DmsFilesQueueModel>();

  public create(data: Omit<DmsFilesQueueModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesQueueModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesQueueModel>): DmsFilesQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesQueueModel = {
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
