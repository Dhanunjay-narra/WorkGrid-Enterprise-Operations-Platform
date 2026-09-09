export type InventoryOrdersSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersSessionStateMachine {
  private allowedTransitions: Record<InventoryOrdersSessionState, InventoryOrdersSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersSessionState, to: InventoryOrdersSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersSessionState, to: InventoryOrdersSessionState): InventoryOrdersSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersSession: " + from + " -> " + to);
    }
    return to;
  }
}
