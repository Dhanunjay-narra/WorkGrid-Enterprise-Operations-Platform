export type CommDigestReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestReportStateMachine {
  private allowedTransitions: Record<CommDigestReportState, CommDigestReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestReportState, to: CommDigestReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestReportState, to: CommDigestReportState): CommDigestReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestReport: " + from + " -> " + to);
    }
    return to;
  }
}
