export type AiEvaluationsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsThresholdStateMachine {
  private allowedTransitions: Record<AiEvaluationsThresholdState, AiEvaluationsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsThresholdState, to: AiEvaluationsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsThresholdState, to: AiEvaluationsThresholdState): AiEvaluationsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
