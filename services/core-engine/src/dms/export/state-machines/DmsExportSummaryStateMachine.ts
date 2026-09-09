export type DmsExportSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportSummaryStateMachine {
  private allowedTransitions: Record<DmsExportSummaryState, DmsExportSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportSummaryState, to: DmsExportSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportSummaryState, to: DmsExportSummaryState): DmsExportSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportSummary: " + from + " -> " + to);
    }
    return to;
  }
}
