export type InventorySuppliersNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersNodeStateMachine {
  private allowedTransitions: Record<InventorySuppliersNodeState, InventorySuppliersNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersNodeState, to: InventorySuppliersNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersNodeState, to: InventorySuppliersNodeState): InventorySuppliersNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersNode: " + from + " -> " + to);
    }
    return to;
  }
}
