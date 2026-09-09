export type DmsVersionsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsReportStateMachine {
  private allowedTransitions: Record<DmsVersionsReportState, DmsVersionsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsReportState, to: DmsVersionsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsReportState, to: DmsVersionsReportState): DmsVersionsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsReport: " + from + " -> " + to);
    }
    return to;
  }
}
