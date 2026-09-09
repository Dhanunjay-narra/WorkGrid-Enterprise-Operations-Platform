import { SecThreatEventData, SecThreatEventValidator } from "../../../../packages/types/src/domains/security/SecThreatEvent";

export class SecThreatEventService {
  private repository = new Map<string, SecThreatEventData>();

  public create(data: Omit<SecThreatEventData, "id" | "createdAt" | "updatedAt">): SecThreatEventData {
    const id = "sec_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SecThreatEventData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecThreatEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecThreatEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecThreatEventData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SecThreatEventData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SecThreatEventData>): SecThreatEventData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecThreatEventData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
