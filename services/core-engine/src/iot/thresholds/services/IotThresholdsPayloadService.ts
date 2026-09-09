import { IotThresholdsPayloadModel, IotThresholdsPayloadValidator } from "@nexora/types/domains/iot/thresholds/IotThresholdsPayload";

export class IotThresholdsPayloadService {
  private repository = new Map<string, IotThresholdsPayloadModel>();

  public create(data: Omit<IotThresholdsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): IotThresholdsPayloadModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotThresholdsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotThresholdsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotThresholdsPayloadModel>): IotThresholdsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdsPayloadModel = {
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
