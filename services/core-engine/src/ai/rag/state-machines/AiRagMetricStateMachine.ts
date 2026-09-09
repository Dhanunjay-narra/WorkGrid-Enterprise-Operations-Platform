export type AiRagMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagMetricStateMachine {
  private allowedTransitions: Record<AiRagMetricState, AiRagMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagMetricState, to: AiRagMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagMetricState, to: AiRagMetricState): AiRagMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagMetric: " + from + " -> " + to);
    }
    return to;
  }
}
