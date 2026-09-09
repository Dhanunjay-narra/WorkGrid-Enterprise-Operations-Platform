export type AiRagBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagBatchStateMachine {
  private allowedTransitions: Record<AiRagBatchState, AiRagBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagBatchState, to: AiRagBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagBatchState, to: AiRagBatchState): AiRagBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagBatch: " + from + " -> " + to);
    }
    return to;
  }
}
