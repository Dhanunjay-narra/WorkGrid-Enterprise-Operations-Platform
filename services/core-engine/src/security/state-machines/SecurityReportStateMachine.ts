export type SecurityReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecurityReportStateMachine {
  private allowedTransitions: Record<SecurityReportState, SecurityReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecurityReportState, to: SecurityReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecurityReportState, to: SecurityReportState): SecurityReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecurityReport: " + from + " -> " + to);
    }
    return to;
  }
}
