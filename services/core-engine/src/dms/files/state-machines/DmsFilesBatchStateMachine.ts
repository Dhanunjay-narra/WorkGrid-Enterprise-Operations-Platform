export type DmsFilesBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesBatchStateMachine {
  private allowedTransitions: Record<DmsFilesBatchState, DmsFilesBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesBatchState, to: DmsFilesBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesBatchState, to: DmsFilesBatchState): DmsFilesBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesBatch: " + from + " -> " + to);
    }
    return to;
  }
}
