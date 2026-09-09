export type AiEvaluationsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsQueueStateMachine {
  private allowedTransitions: Record<AiEvaluationsQueueState, AiEvaluationsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsQueueState, to: AiEvaluationsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsQueueState, to: AiEvaluationsQueueState): AiEvaluationsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
