export type AiEvaluationScoreState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class AiEvaluationScoreStateMachine {
  private validTransitions: Record<AiEvaluationScoreState, AiEvaluationScoreState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: AiEvaluationScoreState, next: AiEvaluationScoreState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: AiEvaluationScoreState, next: AiEvaluationScoreState): AiEvaluationScoreState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for AiEvaluationScore: from " + current + " to " + next);
    }
    return next;
  }
}
