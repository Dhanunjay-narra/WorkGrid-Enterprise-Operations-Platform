export type AuthReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthReportStateMachine {
  private allowedTransitions: Record<AuthReportState, AuthReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthReportState, to: AuthReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthReportState, to: AuthReportState): AuthReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthReport: " + from + " -> " + to);
    }
    return to;
  }
}
