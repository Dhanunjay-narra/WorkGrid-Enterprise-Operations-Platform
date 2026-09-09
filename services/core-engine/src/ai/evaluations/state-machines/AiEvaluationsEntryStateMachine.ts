export type AiEvaluationsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsEntryStateMachine {
  private allowedTransitions: Record<AiEvaluationsEntryState, AiEvaluationsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsEntryState, to: AiEvaluationsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsEntryState, to: AiEvaluationsEntryState): AiEvaluationsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
