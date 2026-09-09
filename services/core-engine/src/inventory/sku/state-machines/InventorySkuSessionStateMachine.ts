export type InventorySkuSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuSessionStateMachine {
  private allowedTransitions: Record<InventorySkuSessionState, InventorySkuSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuSessionState, to: InventorySkuSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuSessionState, to: InventorySkuSessionState): InventorySkuSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuSession: " + from + " -> " + to);
    }
    return to;
  }
}
