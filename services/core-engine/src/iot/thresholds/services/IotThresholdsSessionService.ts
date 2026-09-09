import { IotThresholdsSessionModel, IotThresholdsSessionValidator } from "@nexora/types/domains/iot/thresholds/IotThresholdsSession";

export class IotThresholdsSessionService {
  private repository = new Map<string, IotThresholdsSessionModel>();

  public create(data: Omit<IotThresholdsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): IotThresholdsSessionModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotThresholdsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotThresholdsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotThresholdsSessionModel>): IotThresholdsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdsSessionModel = {
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
