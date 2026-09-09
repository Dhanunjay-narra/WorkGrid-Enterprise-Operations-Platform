export type IntOauthReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthReportStateMachine {
  private allowedTransitions: Record<IntOauthReportState, IntOauthReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthReportState, to: IntOauthReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthReportState, to: IntOauthReportState): IntOauthReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthReport: " + from + " -> " + to);
    }
    return to;
  }
}
