export type AiEvaluationsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsConfigStateMachine {
  private allowedTransitions: Record<AiEvaluationsConfigState, AiEvaluationsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsConfigState, to: AiEvaluationsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsConfigState, to: AiEvaluationsConfigState): AiEvaluationsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
