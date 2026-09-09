export type InventoryReorderPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderPayloadStateMachine {
  private allowedTransitions: Record<InventoryReorderPayloadState, InventoryReorderPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderPayloadState, to: InventoryReorderPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderPayloadState, to: InventoryReorderPayloadState): InventoryReorderPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderPayload: " + from + " -> " + to);
    }
    return to;
  }
}
