import { DmsFilesPayloadModel, DmsFilesPayloadValidator } from "@nexora/types/domains/dms/files/DmsFilesPayload";

export class DmsFilesPayloadService {
  private repository = new Map<string, DmsFilesPayloadModel>();

  public create(data: Omit<DmsFilesPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesPayloadModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesPayloadModel>): DmsFilesPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesPayloadModel = {
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
