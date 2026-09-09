export type InventorySkuStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuStateStateMachine {
  private allowedTransitions: Record<InventorySkuStateState, InventorySkuStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuStateState, to: InventorySkuStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuStateState, to: InventorySkuStateState): InventorySkuStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuState: " + from + " -> " + to);
    }
    return to;
  }
}
