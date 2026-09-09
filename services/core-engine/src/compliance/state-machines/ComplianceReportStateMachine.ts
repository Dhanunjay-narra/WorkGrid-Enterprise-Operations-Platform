export type ComplianceReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceReportStateMachine {
  private allowedTransitions: Record<ComplianceReportState, ComplianceReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceReportState, to: ComplianceReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceReportState, to: ComplianceReportState): ComplianceReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceReport: " + from + " -> " + to);
    }
    return to;
  }
}
