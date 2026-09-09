export type ComplianceMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceMetricStateMachine {
  private allowedTransitions: Record<ComplianceMetricState, ComplianceMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceMetricState, to: ComplianceMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceMetricState, to: ComplianceMetricState): ComplianceMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceMetric: " + from + " -> " + to);
    }
    return to;
  }
}
