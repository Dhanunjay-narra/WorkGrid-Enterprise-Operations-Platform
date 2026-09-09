import { DmsSignaturesPayloadModel, DmsSignaturesPayloadValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesPayload";

export class DmsSignaturesPayloadService {
  private repository = new Map<string, DmsSignaturesPayloadModel>();

  public create(data: Omit<DmsSignaturesPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesPayloadModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesPayloadModel>): DmsSignaturesPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesPayloadModel = {
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
