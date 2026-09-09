export type InventoryOrdersPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersPolicyStateMachine {
  private allowedTransitions: Record<InventoryOrdersPolicyState, InventoryOrdersPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersPolicyState, to: InventoryOrdersPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersPolicyState, to: InventoryOrdersPolicyState): InventoryOrdersPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
