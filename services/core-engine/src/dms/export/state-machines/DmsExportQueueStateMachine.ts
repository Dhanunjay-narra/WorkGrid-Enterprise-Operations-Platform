export type DmsExportQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportQueueStateMachine {
  private allowedTransitions: Record<DmsExportQueueState, DmsExportQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportQueueState, to: DmsExportQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportQueueState, to: DmsExportQueueState): DmsExportQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportQueue: " + from + " -> " + to);
    }
    return to;
  }
}
