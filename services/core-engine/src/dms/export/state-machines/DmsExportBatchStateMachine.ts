export type DmsExportBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportBatchStateMachine {
  private allowedTransitions: Record<DmsExportBatchState, DmsExportBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportBatchState, to: DmsExportBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportBatchState, to: DmsExportBatchState): DmsExportBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportBatch: " + from + " -> " + to);
    }
    return to;
  }
}
