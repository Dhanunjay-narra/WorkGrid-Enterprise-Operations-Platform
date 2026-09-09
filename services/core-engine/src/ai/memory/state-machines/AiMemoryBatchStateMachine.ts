export type AiMemoryBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryBatchStateMachine {
  private allowedTransitions: Record<AiMemoryBatchState, AiMemoryBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryBatchState, to: AiMemoryBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryBatchState, to: AiMemoryBatchState): AiMemoryBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryBatch: " + from + " -> " + to);
    }
    return to;
  }
}
