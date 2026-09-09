import { DmsFoldersQueueModel, DmsFoldersQueueValidator } from "@nexora/types/domains/dms/folders/DmsFoldersQueue";

export class DmsFoldersQueueService {
  private repository = new Map<string, DmsFoldersQueueModel>();

  public create(data: Omit<DmsFoldersQueueModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersQueueModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersQueueModel>): DmsFoldersQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersQueueModel = {
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
