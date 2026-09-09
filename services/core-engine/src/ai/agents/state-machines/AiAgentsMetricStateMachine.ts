export type AiAgentsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsMetricStateMachine {
  private allowedTransitions: Record<AiAgentsMetricState, AiAgentsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsMetricState, to: AiAgentsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsMetricState, to: AiAgentsMetricState): AiAgentsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
