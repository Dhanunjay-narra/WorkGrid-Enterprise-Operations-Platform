import { SupCannedResponseData, SupCannedResponseValidator } from "../../../../packages/types/src/domains/support/SupCannedResponse";

export class SupCannedResponseService {
  private repository = new Map<string, SupCannedResponseData>();

  public create(data: Omit<SupCannedResponseData, "id" | "createdAt" | "updatedAt">): SupCannedResponseData {
    const id = "sup_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SupCannedResponseData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupCannedResponseValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupCannedResponse: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupCannedResponseData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SupCannedResponseData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SupCannedResponseData>): SupCannedResponseData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupCannedResponseData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
