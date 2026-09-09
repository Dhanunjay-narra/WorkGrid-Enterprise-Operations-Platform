export type AuditReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditReportStateMachine {
  private allowedTransitions: Record<AuditReportState, AuditReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditReportState, to: AuditReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditReportState, to: AuditReportState): AuditReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditReport: " + from + " -> " + to);
    }
    return to;
  }
}
