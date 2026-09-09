export type AiEvaluationsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsSummaryStateMachine {
  private allowedTransitions: Record<AiEvaluationsSummaryState, AiEvaluationsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsSummaryState, to: AiEvaluationsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsSummaryState, to: AiEvaluationsSummaryState): AiEvaluationsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
