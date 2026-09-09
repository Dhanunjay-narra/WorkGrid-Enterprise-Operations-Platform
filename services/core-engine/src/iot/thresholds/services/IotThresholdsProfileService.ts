import { IotThresholdsProfileModel, IotThresholdsProfileValidator } from "@nexora/types/domains/iot/thresholds/IotThresholdsProfile";

export class IotThresholdsProfileService {
  private repository = new Map<string, IotThresholdsProfileModel>();

  public create(data: Omit<IotThresholdsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): IotThresholdsProfileModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotThresholdsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotThresholdsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotThresholdsProfileModel>): IotThresholdsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdsProfileModel = {
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
