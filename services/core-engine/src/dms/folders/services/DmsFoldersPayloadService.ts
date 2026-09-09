import { DmsFoldersPayloadModel, DmsFoldersPayloadValidator } from "@nexora/types/domains/dms/folders/DmsFoldersPayload";

export class DmsFoldersPayloadService {
  private repository = new Map<string, DmsFoldersPayloadModel>();

  public create(data: Omit<DmsFoldersPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersPayloadModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersPayloadModel>): DmsFoldersPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersPayloadModel = {
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
