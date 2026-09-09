export type AuditMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditMetricStateMachine {
  private allowedTransitions: Record<AuditMetricState, AuditMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditMetricState, to: AuditMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditMetricState, to: AuditMetricState): AuditMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditMetric: " + from + " -> " + to);
    }
    return to;
  }
}
