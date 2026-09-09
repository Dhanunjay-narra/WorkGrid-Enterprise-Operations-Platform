import { IdDeviceData, IdDeviceValidator } from "../../../../packages/types/src/domains/identity/IdDevice";

export class IdDeviceService {
  private repository = new Map<string, IdDeviceData>();

  public create(data: Omit<IdDeviceData, "id" | "createdAt" | "updatedAt">): IdDeviceData {
    const id = "ide_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IdDeviceData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdDeviceValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdDevice: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdDeviceData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IdDeviceData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IdDeviceData>): IdDeviceData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdDeviceData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
