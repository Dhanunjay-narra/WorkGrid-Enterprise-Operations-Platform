export type AiEvaluationsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsRecordStateMachine {
  private allowedTransitions: Record<AiEvaluationsRecordState, AiEvaluationsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsRecordState, to: AiEvaluationsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsRecordState, to: AiEvaluationsRecordState): AiEvaluationsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
