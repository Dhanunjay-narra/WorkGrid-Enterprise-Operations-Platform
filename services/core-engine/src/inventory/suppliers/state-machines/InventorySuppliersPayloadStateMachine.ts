export type InventorySuppliersPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersPayloadStateMachine {
  private allowedTransitions: Record<InventorySuppliersPayloadState, InventorySuppliersPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersPayloadState, to: InventorySuppliersPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersPayloadState, to: InventorySuppliersPayloadState): InventorySuppliersPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersPayload: " + from + " -> " + to);
    }
    return to;
  }
}
