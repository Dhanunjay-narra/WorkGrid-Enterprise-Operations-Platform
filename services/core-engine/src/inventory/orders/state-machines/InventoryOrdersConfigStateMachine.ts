export type InventoryOrdersConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersConfigStateMachine {
  private allowedTransitions: Record<InventoryOrdersConfigState, InventoryOrdersConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersConfigState, to: InventoryOrdersConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersConfigState, to: InventoryOrdersConfigState): InventoryOrdersConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersConfig: " + from + " -> " + to);
    }
    return to;
  }
}
