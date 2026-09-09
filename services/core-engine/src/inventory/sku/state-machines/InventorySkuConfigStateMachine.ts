export type InventorySkuConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuConfigStateMachine {
  private allowedTransitions: Record<InventorySkuConfigState, InventorySkuConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuConfigState, to: InventorySkuConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuConfigState, to: InventorySkuConfigState): InventorySkuConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuConfig: " + from + " -> " + to);
    }
    return to;
  }
}
