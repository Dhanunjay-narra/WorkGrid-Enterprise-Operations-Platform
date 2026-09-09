export type AiEvaluationsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsItemStateMachine {
  private allowedTransitions: Record<AiEvaluationsItemState, AiEvaluationsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsItemState, to: AiEvaluationsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsItemState, to: AiEvaluationsItemState): AiEvaluationsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsItem: " + from + " -> " + to);
    }
    return to;
  }
}
