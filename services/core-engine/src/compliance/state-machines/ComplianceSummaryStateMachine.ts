export type ComplianceSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceSummaryStateMachine {
  private allowedTransitions: Record<ComplianceSummaryState, ComplianceSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceSummaryState, to: ComplianceSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceSummaryState, to: ComplianceSummaryState): ComplianceSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceSummary: " + from + " -> " + to);
    }
    return to;
  }
}
