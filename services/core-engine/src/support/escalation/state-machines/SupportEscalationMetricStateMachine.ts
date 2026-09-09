export type SupportEscalationMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportEscalationMetricStateMachine {
  private allowedTransitions: Record<SupportEscalationMetricState, SupportEscalationMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportEscalationMetricState, to: SupportEscalationMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportEscalationMetricState, to: SupportEscalationMetricState): SupportEscalationMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportEscalationMetric: " + from + " -> " + to);
    }
    return to;
  }
}
