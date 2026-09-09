import { DmsOcrPayloadModel, DmsOcrPayloadValidator } from "@nexora/types/domains/dms/ocr/DmsOcrPayload";

export class DmsOcrPayloadService {
  private repository = new Map<string, DmsOcrPayloadModel>();

  public create(data: Omit<DmsOcrPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrPayloadModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrPayloadModel>): DmsOcrPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrPayloadModel = {
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
