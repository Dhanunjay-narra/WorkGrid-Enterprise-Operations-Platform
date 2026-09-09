export type InventorySkuMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuMappingStateMachine {
  private allowedTransitions: Record<InventorySkuMappingState, InventorySkuMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuMappingState, to: InventorySkuMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuMappingState, to: InventorySkuMappingState): InventorySkuMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuMapping: " + from + " -> " + to);
    }
    return to;
  }
}
