export type DmsOcrReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrReportStateMachine {
  private allowedTransitions: Record<DmsOcrReportState, DmsOcrReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrReportState, to: DmsOcrReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrReportState, to: DmsOcrReportState): DmsOcrReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrReport: " + from + " -> " + to);
    }
    return to;
  }
}
