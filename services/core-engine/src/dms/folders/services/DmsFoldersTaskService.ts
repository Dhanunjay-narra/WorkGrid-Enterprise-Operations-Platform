import { DmsFoldersTaskModel, DmsFoldersTaskValidator } from "@nexora/types/domains/dms/folders/DmsFoldersTask";

export class DmsFoldersTaskService {
  private repository = new Map<string, DmsFoldersTaskModel>();

  public create(data: Omit<DmsFoldersTaskModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersTaskModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersTaskModel>): DmsFoldersTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersTaskModel = {
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
