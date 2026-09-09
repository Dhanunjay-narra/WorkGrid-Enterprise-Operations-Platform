export type AiEvaluationsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsEventStateMachine {
  private allowedTransitions: Record<AiEvaluationsEventState, AiEvaluationsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsEventState, to: AiEvaluationsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsEventState, to: AiEvaluationsEventState): AiEvaluationsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
