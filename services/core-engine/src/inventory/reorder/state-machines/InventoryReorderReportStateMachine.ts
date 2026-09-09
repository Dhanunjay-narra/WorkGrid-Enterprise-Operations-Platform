export type InventoryReorderReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderReportStateMachine {
  private allowedTransitions: Record<InventoryReorderReportState, InventoryReorderReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderReportState, to: InventoryReorderReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderReportState, to: InventoryReorderReportState): InventoryReorderReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderReport: " + from + " -> " + to);
    }
    return to;
  }
}
