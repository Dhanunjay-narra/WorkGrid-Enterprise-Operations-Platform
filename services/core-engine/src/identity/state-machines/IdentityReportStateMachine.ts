export type IdentityReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityReportStateMachine {
  private allowedTransitions: Record<IdentityReportState, IdentityReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityReportState, to: IdentityReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityReportState, to: IdentityReportState): IdentityReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityReport: " + from + " -> " + to);
    }
    return to;
  }
}
