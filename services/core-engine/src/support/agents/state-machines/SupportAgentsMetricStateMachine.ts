export type SupportAgentsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsMetricStateMachine {
  private allowedTransitions: Record<SupportAgentsMetricState, SupportAgentsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsMetricState, to: SupportAgentsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsMetricState, to: SupportAgentsMetricState): SupportAgentsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
