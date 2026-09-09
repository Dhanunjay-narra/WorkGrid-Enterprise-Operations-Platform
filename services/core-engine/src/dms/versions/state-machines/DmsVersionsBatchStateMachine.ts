export type DmsVersionsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsBatchStateMachine {
  private allowedTransitions: Record<DmsVersionsBatchState, DmsVersionsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsBatchState, to: DmsVersionsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsBatchState, to: DmsVersionsBatchState): DmsVersionsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
