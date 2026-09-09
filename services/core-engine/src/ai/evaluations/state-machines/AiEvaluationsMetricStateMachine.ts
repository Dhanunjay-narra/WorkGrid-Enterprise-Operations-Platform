export type AiEvaluationsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsMetricStateMachine {
  private allowedTransitions: Record<AiEvaluationsMetricState, AiEvaluationsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsMetricState, to: AiEvaluationsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsMetricState, to: AiEvaluationsMetricState): AiEvaluationsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
