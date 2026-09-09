export type AiEvaluationsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsMappingStateMachine {
  private allowedTransitions: Record<AiEvaluationsMappingState, AiEvaluationsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsMappingState, to: AiEvaluationsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsMappingState, to: AiEvaluationsMappingState): AiEvaluationsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
