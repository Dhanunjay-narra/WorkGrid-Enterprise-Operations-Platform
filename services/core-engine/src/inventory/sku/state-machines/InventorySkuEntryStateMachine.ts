export type InventorySkuEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuEntryStateMachine {
  private allowedTransitions: Record<InventorySkuEntryState, InventorySkuEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuEntryState, to: InventorySkuEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuEntryState, to: InventorySkuEntryState): InventorySkuEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuEntry: " + from + " -> " + to);
    }
    return to;
  }
}
