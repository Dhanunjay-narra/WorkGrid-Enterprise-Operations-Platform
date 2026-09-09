export type DmsSignaturesReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesReportStateMachine {
  private allowedTransitions: Record<DmsSignaturesReportState, DmsSignaturesReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesReportState, to: DmsSignaturesReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesReportState, to: DmsSignaturesReportState): DmsSignaturesReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesReport: " + from + " -> " + to);
    }
    return to;
  }
}
