export type AiEvaluationsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsPolicyStateMachine {
  private allowedTransitions: Record<AiEvaluationsPolicyState, AiEvaluationsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsPolicyState, to: AiEvaluationsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsPolicyState, to: AiEvaluationsPolicyState): AiEvaluationsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
